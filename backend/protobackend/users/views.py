from django.shortcuts import render
from django.views.generic.base import TemplateView

from websocket.middleware import WebSocket


class IndexView(TemplateView):
    template_name = "index.html"


class WebSocketView:
    """
    A custom generic view for websockets.

    uvicorn protobackend.asgi:application --reload --debug --ws websockets
    """

    def __init__(self, socket: WebSocket):
        self.socket = socket

    async def dispatch(self, *args, **kwargs):
        self.before_accept(*args, **kwargs)
        await self.socket.accept()
        self.on_accept(*args, **kwargs)
        self.before_receive(*args, **kwargs)
        while True:
            message = await self.socket.receive_text()
            output = self.on_receive(message, *args, **kwargs)
            self.before_send(*args, **kwargs)
            await self.send(output, *args, **kwargs)

    def before_accept(self, *args, **kwargs):
        pass

    def on_accept(self, *args, **kwargs):
        print('original wow')
        pass

    def before_receive(self, *args, **kwargs):
        pass

    def get_message_content(self, message, *args, **kwargs):
        return message

    def on_receive(self, message, *args, **kwargs):
        return self.get_message_content(message, *args, **kwargs)

    def before_send(self, *args, **kwargs):
        pass

    async def send(self, output, *args, **kwargs):
        await self.socket.send_text(output)

    @classmethod
    def as_view(cls, *args, **kwargs):
        async def socket_view(socket: WebSocket):
            instance = cls(socket)
            await instance.dispatch(*args, **kwargs)
        return socket_view


class TestSocketView(WebSocketView):

    def get_message_content(self, message, *args, **kwargs):
        message = super().get_message_content(message, *args, **kwargs)
        return message + ' wow'


async def websocket_view(socket: WebSocket):
    await socket.accept()
    print('websocket called')
    while True:
        message = await socket.receive_text()
        await socket.send_text(message + 'wow')

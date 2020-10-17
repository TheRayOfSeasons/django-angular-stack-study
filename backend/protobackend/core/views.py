import json

from django.http import JsonResponse
from django.views.generic import TemplateView


class JSONView(TemplateView):
    """
    A view dedicated for responding customized json data.

    Reference:
    https://docs.djangoproject.com/en/3.0/topics/class-based-views/mixins/#more-than-just-html
    """

    def render_to_response(self, context, **response_kwargs):
        """
        This totally overrides the template view's render_to_response
        method. Rather than responding an html rendered through django
        templates, this will response a json that contains the values
        returned by get_context_data.
        """
        return JsonResponse(context)

import json
import time

from django.core.serializers import serialize

from core.views import JSONView

from .models import Case


class CaseHomeView(JSONView):
    """
    The default controller for the case app.
    """

    def get_context_data(self, *args, **kwargs):
        return {
            'app': 'case'
        }


class CaseDetailView(JSONView):
    """
    Returns a specific case.
    """

    def get_context_data(self, *args, **kwargs):
        case = Case.objects.filter(pk=self.kwargs.get('pk'))
        data = json.loads(serialize('json', case))
        return {
            'case': data
        }


class CaseListView(JSONView):
    """
    Returns a specific case.
    """

    def get_context_data(self, *args, **kwargs):
        cases = Case.objects.all()
        data = json.loads(serialize('json', cases))
        return {
            'cases': data
        }


class LongLoadingView(JSONView):
    """
    Returns a json after a specific amount of sleep time.
    """
    def get_context_data(self, *args, **kwargs):
        wait_time = 5
        data = {
            'content': f'Wow! A text loaded after {5} seconds.'
        }
        time.sleep(wait_time)
        return data

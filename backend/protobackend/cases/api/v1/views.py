from rest_framework.viewsets import ModelViewSet

from cases.models import Case

from .serializers import CaseSerializer


class CaseViewSet(ModelViewSet):
    """
    Viewset for the case model.
    """
    queryset = Case.objects.all()
    serializer_class = CaseSerializer

from protobackend.urls import router

from .views import CaseViewSet

router.register(r'cases', CaseViewSet)

urlpatterns = []

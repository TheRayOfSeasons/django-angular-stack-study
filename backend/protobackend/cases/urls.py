from django.urls import path

from .views import CaseDetailView
from .views import CaseHomeView
from .views import CaseListView
from .views import LongLoadingView


urlpatterns = [
    path('', CaseHomeView.as_view(), name='root'),

    path('list/', CaseListView.as_view(), name='list'),

    path('detail/<str:pk>/', CaseDetailView.as_view(), name='detail'),

    path(
        'long/test/',
        LongLoadingView.as_view(),
        name='long_load_test'
    )
]

from django.urls import path
from .views import CTFsDetailView, CTFsPageListView, CTFsTopicDetailView, CTFsTopicListView, SearchView

urlpatterns = [
    path('', CTFsPageListView.as_view()),
    path('<ctfs_slug>/', CTFsDetailView.as_view()),
    path('ctfs-topic/<ctfs_topic_slug>/', CTFsTopicDetailView.as_view()),
    path('ctfs-topic/<pk>/submit/', SearchView.as_view()),
    path('<module>/ctfs-topics/', CTFsTopicListView.as_view()),
]
from rest_framework import viewsets
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissionsOrAnonReadOnly

# Create your views here.
class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    lookup_field = "slug"

    def perform_create(self, serializer):
        serializer.save(self.request.user)
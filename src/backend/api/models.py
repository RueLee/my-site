from django.db import models
from django.conf import settings

# Create your models here.
class BlogPost(models.Model):
    title = models.CharField(max_length=256)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_posted = models.DateField()
    excerpt = models.TextField()
    slug = models.SlugField(unique=True, max_length=256)

    def __str__(self):
        return self.title
from django.db import models


class Case(models.Model):
    """
    Represents cases.
    """
    title = models.CharField(max_length=256)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title

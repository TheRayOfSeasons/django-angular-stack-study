from rest_framework import serializers

from cases.models import Case


class CaseSerializer(serializers.ModelSerializer):
    """
    The default serializer for cases.
    """
    class Meta:
        model = Case
        fields = ('id', 'title', 'content')

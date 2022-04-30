from django.shortcuts import render
from .models import Post


def list(request):
    posts = Post.objects.all()
    context = {
        'posts': posts}

    return render(request, 'blog/list.html', context)

from django.db import models
from django.utils.text import slugify

class Note(models.Model):
    name = models.CharField(max_length=255, verbose_name="Name")
    chapters = models.CharField(max_length=2)
    slug = models.SlugField(blank=True)
    cover_img_url = models.CharField(max_length=255, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Note, self).save()

    def __str__(self):
        return self.slug

class Chapter(models.Model):
    chapter_name = models.CharField(max_length=255, verbose_name="Name")
    chapter=models.CharField(blank=True, max_length=2)
    subject_name = models.ForeignKey(Note, on_delete=models.CASCADE)
    body = models.TextField()
    slug = models.SlugField(blank=True, max_length=100)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.chapter_name)
        super(Chapter, self).save()

    def __str__(self):
        return self.chapter_name

    
class Examsolution(models.Model):
    solution_name= models.CharField(max_length=255)
    subject_name = models.ForeignKey(Note, on_delete=models.CASCADE)
    body = models.TextField()
    slug = models.SlugField(blank=True, max_length=100)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.solution_name)
        super(Examsolution, self).save()

    def __str__(self):
        return self.solution_name
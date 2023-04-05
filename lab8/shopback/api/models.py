from django.db import models

# Create your models here.
class Product(models.Model):
#       like:number;
#   categid:number;

#   id: number;
#   name: string;
#   price: number;
#   description: string;
#   image: string;
#   rating: number;
#   link:string;
    name = models.CharField()
    price = models.FloatField()
    description = models.CharField()
    count = models.IntegerField()
    is_active = models.BooleanField()

class Category(models.Model):
    name = models.CharField()
    




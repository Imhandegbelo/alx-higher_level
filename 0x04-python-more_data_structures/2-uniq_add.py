#!/usr/bin/python3
def uniq_add(my_list=[]):
    number = 0
    for el in set(my_list):
        number += el
    return number

import sys
order_of_succession = sys.argv
order_of_succession.pop(0)
##using index, item and start at 1. for the printf
for index, item in enumerate(order_of_succession, start=1):
    str_print = f"{index}. {item}"
    print(str_print)
def find_first_duplicate(arr):
    
    unique_nums = set()

    for num in arr:
        if num in unique_nums:
            return num
        unique_nums.add(num)

    return -1

print("Expecting: 3")
print(find_first_duplicate([2, 1, 3, 3, 2]))

print("")

print("Expecting: -1")
print(find_first_duplicate([1, 2, 3, 4]))

print("")

print("Expecting: -1")
print(find_first_duplicate([]))

print("")

print("Expecting: -1")
print(find_first_duplicate([5]))

print("")

print("Expecting: 7")
print(find_first_duplicate([7, 1, 2, 3, 7]))
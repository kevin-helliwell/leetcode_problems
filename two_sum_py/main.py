# You are given an array of integers nums and an integer target.
# Return an array containing the indices of the two numbers.
# These numbers should add up to the target.

# You may assume that each input would have exactly one solution.
# You may not use the same element twice.
# You can return the answer in any order.

def two_sum(nums: list, target: int) -> list[int]:
    prevMap = {}  # value : index

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i
    return


def main():
    # Test 1
    nums1 = [2, 7, 11, 15]
    target1 = 9
    assert (two_sum(nums1, target1) == [0, 1])

    # Test 2
    nums2 = [3, 2, 4]
    target2 = 6
    assert (two_sum(nums2, target2) == [1, 2])


if __name__ == "__main__":
    main()

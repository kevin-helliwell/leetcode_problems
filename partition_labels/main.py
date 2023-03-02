# You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

# Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

# Return a list of integers representing the size of these parts.


def partitionLabels(s: str) -> list[int]:
    lastIndex = {}  # char -> last index in str s
    for i, c in enumerate(s):
        lastIndex[c] = i
    result = []
    size, end = 0, 0  # size of partition, last index of char
    for i, c in enumerate(s):
        size += 1
        # if lastIndex[c] > end:
        # end = lastIndex[c]
        end = max(end, lastIndex[c])  # one-liner, same as 10-11
        if i == end:
            result.append(size)  # adds partition size to result []
            size = 0  # resets size
    return result


def main():
    # Case 1
    s1 = "ababcbacadefegdehijhklij"
    assert partitionLabels(s1) == [9, 7, 8], "Test 1 failed!"

    s2 = "eccbbbbdec"
    assert partitionLabels(s2) == [10], "Test 2 failed!"


if __name__ == "__main__":
    main()

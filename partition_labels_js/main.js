// You are given a string s.We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.


const partitionLabels = (string) => {
    const lastSeenIndices = {};

    // Iterates through the string to find the last index of each character
    // Starts at right and moves left because last index on left is equivalent to first index on right (optimization)
    // Only maps char (key) to i (value) if char doesn't already have an associated value (optimization)

    for (let i = string.length - 1; i >= 0; i--) {
        const char = string[i];

        if (!lastSeenIndices[char]) {
            lastSeenIndices[char] = i;
        }
    }

    const partitions = [];
    let start = 0; // start index of a partition; starts at 0, only changes if new partition is created
    let end = 0; // end index of a partition; starts at 0, and changes based on char being inspected

    for (let i = 0; i < string.length; i++) {
        // if char at string[i] has a last index > current end, update end to lastSeenIndices[char]
        const char = string[i];
        const lastCharIndex = lastSeenIndices[char];

        if (lastCharIndex > end) end = lastCharIndex;

        // if i === end, partition has been found
        // partition gets added to partitions array
        // start gets updated, and iteration continues
        if (i === end) {
            const partition = end - start + 1;
            partitions.push(partition);
            start = i + 1;
        }
    }

    return partitions;

};

const main = () => {
    s1 = "ababcbacadefegdehijhklij";
    console.log(partitionLabels(s1));

    s2 = "eccbbbbdec";
    console.log(partitionLabels(s2));
};

main();
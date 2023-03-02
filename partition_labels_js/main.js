// You are given a string s.We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

const partitionLabels = (string) => {
    const lastSeenIndices = {};

    for (let i = string.length - 1; i >= 0; i--) {
        const char = string[i];

        if (!lastSeenIndices[char]) {
            lastSeenIndices[char] = i;
        }
    }

    const partitions = [];
    let start = 0;
    let end = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const lastCharIndex = lastSeenIndices[char];

        if (lastCharIndex > end) end = lastCharIndex;

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
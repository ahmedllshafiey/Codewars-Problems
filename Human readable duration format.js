function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }

    const units = [
        { label: "year", seconds: 365 * 24 * 60 * 60 },
        { label: "day", seconds: 24 * 60 * 60 },
        { label: "hour", seconds: 60 * 60 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 }
    ];

    const result = [];

    for (const unit of units) {
        if (seconds >= unit.seconds) {
            const count = Math.floor(seconds / unit.seconds);
            seconds %= unit.seconds;
            result.push(`${count} ${unit.label}${count > 1 ? "s" : ""}`);
        }
    }

    // Join components with commas and 'and' for the last component
    if (result.length === 1) {
        return result[0];
    } else {
        const last = result.pop();
        return result.join(", ") + " and " + last;
    }
}
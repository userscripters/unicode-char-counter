type HeatColor = "warm" | "hot" | "supernova" | "fc-red-400";

((w, d) => {
    const safeStringLength = (text: string) => {
        let count = 0;

        const ZWJ = 8205;
        const variationSelectorMatch = /[\ufe00-\ufe0F]/;

        let skipNextChar = false;

        for (const char of text) {
            if (skipNextChar) {
                skipNextChar = false;
                continue;
            }

            if (variationSelectorMatch.test(char)) continue;

            const code = char.codePointAt(0);

            if (code === ZWJ) {
                skipNextChar = true;
                continue;
            }

            count += 1;
        }
        return count;
    };

    w.addEventListener("load", () => {
        const friendlyCounter = d.createElement("div");
        friendlyCounter.classList.add(
            "flex--item",
            "ta-right",
            "mr0",
            "fs-caption",
            "mt4",
            "cool"
        );

        const colorMap: Record<HeatColor, number> = {
            "warm": 0.4,
            "hot": 0.6,
            "supernova": 0.8,
            "fc-red-400": 1,
        };

        const colorEntries = Object.entries(colorMap);
        const colorClasses = Object.keys(colorMap);

        d.addEventListener("input", ({ target }) => {
            if ((target as Element).id !== "title") return;

            const counter = (target as Element)
                .closest(".js-stacks-validation")
                ?.querySelector(".text-counter");
            if (!counter) return;

            if (!counter.classList.contains("d-none")) {
                counter.classList.add("d-none");
                counter.after(friendlyCounter);
            }

            const {
                dataset: { maxLength = "0" },
                value,
            } = target as HTMLInputElement;

            const max = +maxLength;

            const ourLength = safeStringLength(value);
            const theirLength = value.length;

            const ourLeft = max - ourLength;
            const theirLeft = max - theirLength;

            const { textContent: unfriendlyCount } = counter;

            // match main notification show/hide behaviour
            if (!unfriendlyCount) return (friendlyCounter.textContent = "");

            const agreement = theirLeft === ourLeft ? "and" : "but";

            const ours =
                ourLeft >= 0
                    ? `${ourLeft} char${ourLeft !== 1 ? "s" : ""}`
                    : `over by ${Math.abs(ourLeft)}`;

            const theirs =
                theirLeft >= 0
                    ? `${theirLeft} left`
                    : `is over by ${Math.abs(theirLeft)}`;

            friendlyCounter.textContent = `${ours} (of ${max}) left (${agreement} SE thinks ${theirs})`;

            const matchingColors = colorEntries.filter(
                ([_color, mod]) => max * mod < ourLength
            );

            const [colorCls] = matchingColors.reduce(
                (a, c) => (a[1] < c[1] ? c : a),
                ["cool", 0]
            );

            const { classList } = friendlyCounter;
            classList.remove(...colorClasses);
            classList.add(colorCls);
        });
    });
})(window, document);

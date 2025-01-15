(function manageCSSRule() {
    const youtubeHostname = ["www.youtube.com", "m.youtube.com"];

    // Check if the script is running on YouTube
    if (!youtubeHostname.includes(window.location.hostname)) {
        console.log("Script will not run: Not on YouTube.");
        return;
    }

    const classNames = [
        ".yt-thumbnail-view-model",
        ".ytd-thumbnail",
        ".ShortsLockupViewModelHostThumbnailContainer",
        ".ytp-ce-covering-image",
        ".ytd-video-preview",
        ".yt-core-image",
        ".video-thumbnail-img",
        ".ytd-compact-video-renderer"
    ];
    const newCssText = "display: none !important;";

    const applyCssRule = (selector, cssText) => {
        try {
            const styleSheet = document.styleSheets[0];
            styleSheet.insertRule(`${selector} { ${cssText} }`, styleSheet.cssRules.length);
            console.log(`CSS rule added: ${selector} { ${cssText} }`);
        } catch (error) {
            console.warn(`Failed to insert rule for selector: ${selector}`, error);
        }
    };

    // Try to apply rules via stylesheets
    classNames.forEach(className => {
        let ruleApplied = false;

        for (const styleSheet of document.styleSheets) {
            try {
                const rules = styleSheet.cssRules || styleSheet.rules;
                for (const rule of rules) {
                    if (rule.selectorText === className) {
                        rule.style.cssText = newCssText;
                        console.log(`Updated existing rule: ${className} { ${newCssText} }`);
                        ruleApplied = true;
                        break;
                    }
                }
            } catch (error) {
                // Ignore inaccessible stylesheets
                console.warn(`Could not access stylesheet:`, styleSheet, error);
            }
            if (ruleApplied) break; // Stop if rule applied
        }

        if (!ruleApplied) {
            applyCssRule(className, newCssText); // Add the rule if not already present
        }
    });

    // Apply inline styles as a fallback
    classNames.forEach(className => {
        const elements = document.querySelectorAll(className);
        if (elements.length > 0) {
            elements.forEach(element => {
                element.style.cssText = newCssText;
            });
            console.log(`Applied inline styles directly to ${elements.length} elements for: ${className}`);
        } else {
            console.log(`No elements found for selector: ${className}`);
        }
    });
})();

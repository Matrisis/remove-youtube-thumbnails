# RYT - Remove YouTube Thumbnails

RYT (Remove YouTube Thumbnails) is a lightweight browser extension designed to remove video thumbnails on YouTube, both within and outside of the player, including Shorts thumbnails. This tool helps create a distraction-free browsing experience by eliminating unnecessary visual clutter.

## Features

- Hides video thumbnails on YouTube.
- Targets multiple YouTube elements including Shorts thumbnails and player-related images.
- Ensures fallback mechanisms for applying styles if certain methods fail.
- Lightweight and easy to install.

## How It Works

The extension uses JavaScript to dynamically modify CSS rules on the YouTube website. It identifies and targets specific class names associated with thumbnails and applies styles to hide them. The script also includes fallback mechanisms to ensure functionality, even if some stylesheets are inaccessible.

## Installation

### Prerequisites
- A Chromium-based browser that supports Manifest V3 extensions (e.g., Google Chrome, Microsoft Edge, or Brave).

### Steps
1. Clone or download this repository:
   ```bash
   git clone https://github.com/Matrisis/DocumentationGenerator.git
   ```
2. Open your browser and navigate to the extensions page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
3. Enable "Developer mode" (usually located in the top-right corner).
4. Click on "Load unpacked" and select the folder containing the extension files.
5. The extension will now be installed and active.

## Manifest File

The `manifest.json` file configures the extension with the following properties:

- **`manifest_version`**: Set to version 3.
- **`name`**: Extension name: "RYT - Remove YouTube Thumbnails".
- **`description`**: A brief description of the extension's purpose.
- **`version`**: Current version of the extension (1.0).
- **`action`**: Default icon settings.
- **`content_scripts`**: Specifies which scripts to run and on which URLs (YouTube pages).

## Script Breakdown

The `background.js` script:

1. **Target Hostnames**: Ensures the script runs only on `www.youtube.com` and `m.youtube.com`.
2. **Class Names**: Specifies a list of CSS class names for YouTube thumbnails.
3. **CSS Rules**: Dynamically adds or updates CSS rules to hide thumbnails.
4. **Inline Styles**: Applies fallback inline styles directly to elements when stylesheet modifications are not possible.
5. **Error Handling**: Logs warnings for inaccessible stylesheets or other errors.

### Key Functionality
- `applyCssRule`: Adds CSS rules to stylesheets dynamically.
- `classNames`: List of target CSS selectors.
- `document.styleSheets`: Iterates through stylesheets to modify or add rules.

## Contributing

Contributions are welcome! If you encounter issues or have feature requests, please open an issue or submit a pull request.

### Development Setup
1. Clone the repository.
2. Modify `background.js` or other files as needed.
3. Reload the extension in your browser's extensions page to see changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

Special thanks to all contributors and testers who helped make this project possible.

---

Enjoy a clutter-free YouTube experience with RYT!

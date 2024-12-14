# YouTube Region Restriction Checker

## Overview
The **YouTube Region Restriction Checker** is a tool designed to identify videos that are restricted in specific countries or regions. It can be used by creators, viewers, and developers to verify the availability of YouTube content across different geographical locations.

---

##Screenshots

![Screenshot 2024-12-14 102324](https://github.com/user-attachments/assets/eff4d87e-3f08-4413-8e2e-a844de55f5cb)

---

## Features
- Check if a YouTube video is restricted in a specific country or globally.
- Supports multiple video URLs for batch processing.
- Provides detailed restriction reports for each country.
- Easy-to-use interface with minimal input requirements.
- Option to export results to a file (e.g., CSV or JSON).

---

## Requirements
To use this tool, ensure you have the following:

1. **Programming Language:** Python (or the language you plan to use)
2. **Libraries/Dependencies:**
   - `requests` (for API requests)
   - `json` (to handle data processing)
3. **YouTube Data API Key:**
   - A valid API key is required to fetch video details from YouTube’s servers. You can obtain it from [Google Cloud Console](https://console.cloud.google.com/).

---

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/youtube-region-restriction-checker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd youtube-region-restriction-checker
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up your YouTube Data API key:
   - Replace `YOUR_API_KEY` in the code with your actual API key.

---

## Usage
1. Run the script:
   ```bash
   python check_restrictions.py
   ```

2. Enter the YouTube video URL(s) or IDs when prompted.

3. Specify the regions (e.g., US, UK, IN) to check restrictions for, or leave blank to check all countries.

4. View the restriction status in the terminal or export it as a file.

---

## Example
### Input:
- Video URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Region(s): `US, IN, JP`

### Output:
| Country | Restriction Status |
|---------|---------------------|
| US      | Available           |
| IN      | Restricted          |
| JP      | Available           |

---

## Export Options
You can save the results in the following formats:
- **CSV:** `results.csv`
- **JSON:** `results.json`

Modify the script to enable the desired export format.

---

## Troubleshooting
1. **Invalid API Key:** Ensure your API key is correct and has sufficient quota.
2. **Rate Limits:** The YouTube Data API has a daily quota. Reduce the number of requests or apply for a higher quota.
3. **Unsupported Video ID:** Verify that the video ID or URL is correct.

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For issues, suggestions, or feature requests, please open an issue on [GitHub](https://github.com/your-username/youtube-region-restriction-checker/issues).

---

Happy checking! 🎥🌍


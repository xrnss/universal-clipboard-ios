# UniversalClipboard
Apple decided to only create their universally syncing clipboard between iPad, iPhone and Mac, leaving out Windows. 
Therefore, I created this simple project to try and replicate it, so I could copy links between my devices and my computer. This was superceded by Notion for simplificy though...

## Prerequisites
- Node.JS and NPM
- A simple shortcut on iOS that grabs the clipboard and sends it as JSON to the server and port chosen
- A simple shortcut on iOS that makes a request to the server and post chosen and sets the body to the clipboard

## Installation & Running
1. Download the GitHub project
2. Run "node index" in the UniversalClipboard folder

This is more a proof-of-concept and a quick fix for me rather than something that really should be used.. I suggest using Notion like a notepad instead due to its easy syncing.
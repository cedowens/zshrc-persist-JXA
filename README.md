# zshrc-persist-JXA
JXA script to add a macho binary to ~/.zshrc for persistence.

If ~/.zshrc does not exit the script will create one and add the following:

> nohup <path_to_binary> &

If ~/.zshrc does already exist, this script will append the above to the bottom of ~/.zshrc.

## Usage With Mythic
1. > jsimport zshrc-persist.js
2. > jsimport_call Persist('path_to_macho_binary')

## To Run Locally
1. uncomment the last line
2. add the path to the on-disk macho binary that you want to add for persistence
3. save & close
4. > osascript zshrc-persist.js

#!/bin/bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: undeployFiles.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Copying files for $service to $hostname with $key\n"

# Step 1 (removed)

# Step 2
printf "\n----> Backing up files...\n"
scp -r -i "$key" ubuntu@$hostname:services/$service/public BACKUP
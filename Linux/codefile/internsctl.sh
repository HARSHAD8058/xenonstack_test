#!/bin/bash

if [ $# -lt 1 ]; then
	echo "Incorrect Usage : run --help for commands"
	exit
fi

# Version
if [ $1 == "--version" ]; then
	echo "v 0.1.0"
fi

# Help Options
if [ $1 == "--help" ]; then
	printf "    cpu getinfo                 "
	echo "        gives CPU info"
	printf "    create USERNAME                 "
	echo "    command to create new user with given username"
	printf "    list                 "
	echo "               command to list all the users"
	printf  "    --sudo-only                 "
	echo "        command to list users with sudo permissions"
	printf "    getinfo FILE_NAME                "
	echo "   get information about the file"
    printf  "    --last-modified, -m                 "
	echo "show date and time when file was last modified"
    printf  "    --owner, -o                 "
	echo "        show file owner"
	printf  "    --permissions, -p                 "
	echo "  show file permissions"
	printf  "    --size, -s                 "
	echo "         show file size"
fi


# Easy
if [ $1 == "cpu" ]; then
	if [ $# == 2 ] && [ $2 == "getinfo" ] ; then
		lscpu
	else
		echo "Incorrect Usage : refer --help section"
	fi
fi
if [ $1 == "memory" ]; then
	if [ $# == 2 ] && [ $2 == "getinfo" ] ; then
		free
	else
		echo "Incorrect Usage : refer --help section"
	fi
fi

# Intermediate
if [ $1 == "user" ]; then
	if [ $# -lt 2 ]; then
		echo "More options required"
		exit
	fi

	if [ $# == 3 ] && [ $2 == "create" ]; then
		useradd $3
	else 
		if [ $# -gt 1 ] && [ $2 == "list" ]; then
			if [ $# == 3 ] && [ $3 == "--sudo-only" ] ; then
				echo root
				cat /etc/group | grep wheel | cut -d ":" -f 4
			else
				cat /etc/passwd | cut -d ":" -f 1
			fi
		else
			echo "Error : refer --help section"
		fi
	fi
fi

# Advanced
if [ $1 == "file" ]; then
	if [ $# -gt 2 ] && [ $2 == "getinfo" ] ; then
		ls ${@: -1} > /dev/null 2> /dev/null
			
		if [ $? != 0 ]; then
			echo "File ${@: -1} does not exist"
		else
			if [ $# == 3 ]; then
				printf "%10s \t" Name:
				echo $(ls ${@: -1})
			fi

			if [ $# == 3 ] || [ $3 == "--permissions" ] || [ $3 == "-p" ]; then
				if [ $# == 3 ]; then
					printf "%10s \t" Access:
				fi
				ls -la ${@: -1} | cut -d " " -f 1
			fi

			if [ $# == 3 ] || [ $3 == "--size" ] || [ $3 == "-s" ]; then
				if [ $# == 3 ]; then
					printf "%10s \t" "Size(B):"
				fi
				ls -la ${@: -1} | cut -d " " -f 5
			fi

			if [ $# == 3 ] || [ $3 == "--owner" ] || [ $3 == "-o" ]; then
				if [ $# == 3 ]; then
					printf "%10s \t" Owner:
				fi
				ls -la ${@: -1} | cut -d " " -f 3
			fi

			if [ $# == 3 ] || [ $3 == "--last-modified" ] || [ $3 == "-m" ]; then
				if [ $# == 3 ]; then
					printf "%10s \t" Modify:
				fi
				stat ${@: -1} | grep Modify | cut -d " " -f 2,3,4
			fi
		fi
	else
		echo "Incorrect Usage : refer --help section"
	fi
	exit
fi

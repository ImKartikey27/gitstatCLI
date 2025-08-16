# POSIX CLI Guidelines (Simplified)

This document summarizes the POSIX command-line interface (CLI) guidelines in simple language with examples.  
These rules help create consistent and predictable command-line utilities.

---

## Guideline 1
**Utility names should be between 2 and 9 characters.**  
✅ Example: `ls`, `grep`, `tar`  
❌ Bad: `listfilesutility`

---

## Guideline 2
**Utility names should use only lowercase letters and digits.**  
✅ Example: `git`, `python3`  
❌ Bad: `MyTool`, `UTIL_1`

---

## Guideline 3
**Each option should be a single alphanumeric character.**  
`-W` (capital W) is reserved for vendor options.  
✅ Example: `ls -l`  
❌ Bad: `ls -long`

---

## Guideline 4
**All options must start with `-`.**  
✅ Example: `ls -a -l`  
❌ Bad: `ls l a`

---

## Guideline 5
**Options without arguments can be grouped, followed by at most one option with an argument.**  
✅ Example: `tar -xvf file.tar` (`-x`, `-v`, and `-f file.tar`)  
❌ Bad: `tar -xfv file.tar` (argument placement is wrong)

---

## Guideline 6
**Each option and its argument should be separate unless noted.**  
✅ Example: `cc -o output file.c`  
❌ Bad: `cc -ofile file.c`

---

## Guideline 7
**Option arguments must not be optional.**  
✅ Example: `grep -e pattern file.txt`  
❌ Bad: `grep -e file.txt` (missing pattern)

---

## Guideline 8
**Multiple arguments for one option should be given as a single argument separated by commas or spaces.**  
✅ Example: `cc -l a,b,c`  
✅ Example: `cc -l "a b c"`

---

## Guideline 9
**All options should come before operands.**  
✅ Example: `grep -i "text" file.txt`  
❌ Bad: `grep file.txt -i "text"`

---

## Guideline 10
**`--` marks the end of options. Everything after is treated as operands.**  
✅ Example: `grep -- -pattern file.txt` (searches for `-pattern`)

---

## Guideline 11
**Order of options should not matter unless documented.**  
✅ Example: `ls -al` is same as `ls -la`  
✅ Example: `cc -I dir1 -I dir2` (processed in order)

---

## Guideline 12
**Order of operands may matter depending on utility.**  
✅ Example: `mv file1 file2` (order matters)

---

## Guideline 13
**A single `-` operand means stdin or stdout.**  
✅ Example: `cat - file.txt` (reads stdin, then file)  
✅ Example: `grep pattern -` (reads from stdin)

---

## Guideline 14
**Anything that looks like an option should be treated as one.**  
✅ Example: `ls -a` (correctly parsed as option)  

---

## Notes
- POSIX utilities **must follow these rules** to be compliant.  
- Some tools allow non-standard usage for backward compatibility.

---

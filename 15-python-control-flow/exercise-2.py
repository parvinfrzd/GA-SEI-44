# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase: 
# 2. Print the following message:
#      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.

string = ''
def split(word):
    return [char for char in word]

while(string != 'quit'):
    string = input('Please enter a word or phrase: ').lower()
    if(string == 'quit'): 
        print('Exit!')
        break 
    input_list = split(string)
    print(input_list)
    print(f'What you entered is {len(input_list)} characters long')

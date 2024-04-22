class PhoneBooK{
    constructor(){
         this.readlineSync = require("readline-sync");
         this.input = 0;
    }
    
    mainMenu(){
        console.log(`
        WELCONE TO PHONE BOOK 
        1. Phone Book
        2. Message
        3. Chat
        4. Call Register
        5. Tones
        6. Settings
        7. Call Divert
        8. Games
        9. Calculator
        10. Reminders
        11. Clock
        12. Profile
        13. SIM services
        14. Exit
        `)
        this.input = this.collectInput();
        this.displayUserOption(this.input)
    }
    displayUserOption(params){
        switch(params){
            case 1:this.displayPhoneBookOPtion();
            this.mainMenu();
            break;
            case 2:this.messageOption();
            this.mainMenu();
            break
            case 3:this.displayOptionThree();
            this.mainMenu();
            break;
            case 4:
                this.displayOptionCallRegister();
                this.mainMenu();
            break;
            case 5:
                this.displayOptionFive();
                this.mainMenu();
            break;  
            case 7:
                console.log("Call divert\n");
                this.mainMenu();
            break;    
 			case 8:	
             console.log("Games\n");
             this.mainMenu();
             break;
 			case 9:
                console.log("Calculator\n")
                this.mainMenu();
            break;
 			case 10:
                console.log("Reminders\n")	
                this.mainMenu();
            break; 
            case 11:
                this.displayOptionEleven();
                this.mainMenu();
            break;    
             case 12:console.log("Profiles");
             this.mainMenu();
             break;
            case 13: console.log("SIM services");
            this.mainMenu();
            break;
            case 14: console.log(" Good Bye");
            break;
            default : console.log("Invalid Number");





        }

    }
    displayPhoneBookOPtion(){
        console.log(`
        <<<<<<Phone Book>>>>>>>
            1. Search
            2. Services Nos
            3. Add name
            4. Erase
            5. Edit
            6. Assign Tone
            7. Send b'card
            8. Options
            9. Speed dials
            10. Voice tags
            11. go to previous page
            12. MainMenu
            `)
            this.input = this.collectInput();
            this.matchOptionForPhoneBook(this.input)
    }
    matchOptionForPhoneBook(params){
        switch (params){
			case 1:
 				console.log("Search\n");
            break;
		    case 2:
  			    console.log("Service Nos\n");
            break;
 			case 3:
                console.log("Add name \n");
            break;	
 			case 4:
                console.log("Erase \n");
            break		
 			case 5:
                console.log("Edit\n");
            break;    				
 			case 6:
                console.log("Assign Tone\n");
            break;    	
 			case 7:
                console.log("Send B'Card \n");
            break;    
 			case 8:	
                this.displayOptionEightUnderPhoneBook();
            break;
 			case 9:
                console.log("Speed dials\n")
            break;
 			case 10:
                console.log("Voice Tags\n")	
            break;
            case 11:
                this.displayPhoneBookOPtion();  
            break;      
            case 12:
                this.mainMenu();
            default :
                console.log("InValid Input");
                this.mainMenu();    
        }
   
    }
    displayOptionEightUnderPhoneBook(){
        console.log();
        console.log("\tOptions\n1. Type of view\n2. Memory Status\n 3. previous page");
        this.input = this.collectInput();

         switch(this.input){
            case 1:
                console.log("1. Type of view\n");
                this.displayOptionEightUnderPhoneBook();
            break;    
            case 2:
                console.log("2. Memory Status\n");
                this.displayOptionEightUnderPhoneBook();
            break;
            case 3:
                this.displayPhoneBookOPtion();
            break;
            default:
                console.log("invalid input");
                this.displayPhoneBook();            

        }
         
    }
    messageOption(){
        console.log(`
        1. Write message 
        2. Inbox
        3. Outbox
        4. Picture
        5. Templates
        6. Smileys 
        7. Message settings
        8. Info Service 
        9. Voice mailbox number 
        10. Service commmand editor
        11. main menu
        `)
        this.input = this.collectInput();
        this.displayMessageOption(this.input);
    }
    displayMessageOption(params){
        switch(params){
            case 1:
 				console.log("Write Message\n");
            break;
		    case 2:
  			    console.log("Inbox\n");
            break;
 			case 3:
                console.log("OutBox \n");
            break;	
 			case 4:
                console.log("Picture messages\n");
            break		
 			case 5:
                console.log("Templates\n");
            break;    				
 			case 6:
                console.log("Message settings\n");
            break;
            case 7:
                this.displayOptionSevenInMessage();
            break;
            case 8:
                console.log("Info Service\n")
            break;
            case 9:
                console.log("Vioce mailbox number\n")
            break;
 			case 10:
                console.log("Service command and editor\n")	
            break;
            case 11:
                this.displayMessageOption();  
            break;      
            case 12:
                this.mainMenu();
            default :
                console.log("InValid Input");
                this.mainMenu();        

        }
    }
    displayOptionSevenInMessage(){
        console.log(`
                <<<<< Message settings>>>>
            1. Set 1
            2. Common 
            3. previous menu
            4. main menu    
        `)
        this.input = this.collectInput();
        switch(this.input){
            case 1:
                console.log(`
                <<<<< Set 1>>>>
            1. Message Centre Number
            2. Mesage sent as 
            3. Message Validity  
            `)
            break;
		    case 2:
                console.log(`
                <<<< Common >>>>
            1. Delivery Reports 
            2. Reply via same centre
            3. Character support
            `)  
            break;  
            case 3:
                this.displayMessageOption();
            break;
            case 4:
                this.mainMenu();
            break;
            default:
                console.log("Invalid Input")
                this.displayOptionSevenInMessage();               
        }
    }
    displayOptionThree(){
        console.log("Chat ");
        this.mainMenu();
    }
    displayOptionCallRegister(){
        console.log(`
                <<<< Call Register >>>>>
            1. Missed calls
            2. Recieved calls
            3. Dialled numbers 
            4. Erase recent call lists
            5. Show call duration
            6. Show call cost 
            7. Call cost setting 
            8. Prepaid Credit
            9. previous menu
            10. main menu 
        `)
        this.input = this.collectInput();
        this.displayOptionCallRegisterResponse(this.input);
    }
    collectInput(){
        this.input = parseInt(this.readlineSync.question("Choose Option "));
        return this.input;
    }
    displayOptionCallRegisterResponse(params){
        switch(params){
            case 1:
                console.log("Missed Call ");
           break;
           case 2:
                 console.log("Recieved Call\n");
           break;
            case 3:
               console.log("Dialled Number\n");
           break;	
            case 4:
               console.log(" ERase recent call list \n");
           break
           case 5:this.displayOptionFiveOfCallRegister();
                    this.displayOptionCallRegister();
            break;
            case 6: this.displayOptionSixOfCallRegister();
            break;
            case 7: this.displayOptionSevenOfCallRegister();
            break;
            case 8: console.log(" Prepaid credit ");
            break;
            case 9: this.displayOptionCallRegister();
            break;
            case 10:this.mainMenu();
            break;
            default :
                console.log("Invalid input ");
                this.displayOptionCallRegister();
        }
    }
    displayOptionFiveOfCallRegister(){
        console.loog(`
                <<<< Call Duration >>>>
            1. Last call duration 
            2. All calls' duration 
            3. Recieved call duration 
            4. Dialled call duration
            5. Clear Timers   
        `)
        this.displayOptionCallRegister();
    }
    displayOptionSixOfCallRegister(){
        console.log(`
                <<< Show Call Cost >>>
            1. Last call cost
            2. All calls' cost
            3. Clear counters

        `)
        this.displayOptionCallRegister();
    }
    displayOptionSevenOfCallRegister(){
        console.log(`
                <<< Call Cost settings >>>
            1.  call cost limit 
            2. Show costs in 

        `)
        this.displayOptionCallRegister();
    }
    displayOptionFive(){
        console.log(`
                <<<<< Tones >>>>
                1. Ringing Tone
                2. Ringing volume 
                3. Incoming alert
                4. Composer 
                5. Message alert tone 
                6. Keypad tone 
                7. Warning and game tones 
                8. Vibrating alert 
                9. Screen saver 
                10. previous page 
                11. main menu    
        `)
        this.input = this.collectInput();
        switch(this.input){
            case 1:
                console.log("Ringing Tone\n");
           break;
           case 2:
                 console.log("Ringing volume\n");
           break;
            case 3:
               console.log("Incoming alert\n");
           break;	
            case 4:
               console.log("Composer \n");
           break		
            case 5:
               console.log("Message alert tone \n");
           break;    				
            case 6:
               console.log("Key board tone \n");
           break;    	
            case 7:
               console.log(" Warning and game tone \n");
           break;    
            case 8:	
            console.log("Vibrating alert \n");
            break;
            case 9:
               console.log("Screen saver \n")
           break;
           case 10:
                this.displayOptionFive();
            break;
           case 11:
                this.mainMenu();   
            break;
            default :
                console.log("Invalid input");
                this.displayOptionFive();    
        }
    }
    displayOptionSix(){
        console.log(`
                <<<< Settings >>>>
            1. Call settings
            2. Phone settings
            3. Security settings
            4. Restore factory settings   
            5. previous menu 
            6. main menu 
        `)
        this.input = this.collectInput();
        switch(this.input){
            case 1:
                console.log(`
                    <<< Call settings >>>
                1. Automatic redail
                2. speed dailing 
                3. Call waiting option 
                4. Own number sending
                5. phone line in use 
                6. Automatic answer 

                `)
            break;
            case 2:
             console.log(`
                <<< Phone settings >>>
            1. Language 
            2. cell info display 
            3. Welcome note 
            4. Network Selection 
            5. Lights
            6. Confirm SIM service actions

            `)
            break;
            case 3:
            console.log(`
                <<< Security settings >>>
            1. Pin code request
            2. Call barring service  
            3. Fixed dailing  
            4. Closed user group 
            5. Phone Security 
            6. Change Access codes 

            `)
            break;
            case 4:
            console.log("Restore Factory Setting ")
            break;
            case 5:
                this.displayOptionSix();
            break;
            case 6:
                this.mainMenu()
            break;
            default :
                console.log("Invaloid Input");
                this.displayOptionSix();    
        }
    }
    displayOptionEleven(){
        console.log(`
                <<<< Clock >>>>
            1. Alarm clock 
            2. Clock settings
            3. Date settings
            4. Stopwatch
            5. CoundDown timer
            6. Auto update of date and time 
            7. previous menu
            8. main menu    
        `)
        this.input = this.collectInput();
        switch(this.input){
            case 1:
 				console.log("Alarm Clock \n");
            break;
		    case 2:
  			    console.log("Clock settings \n");
            break;
 			case 3:
                console.log("Date settings \n");
            break;	
 			case 4:
                console.log("Stopwatch \n");
            break		
 			case 5:
                console.log("countdown timer \n");
            break;    				
 			case 6:
                console.log("Auto update date and time \n");
            break; 
            case 7:
                this.displayOptionEleven();
            break;
            case 8:
                this.mainMenu();
            break;
            default :
             console.log("Invalid Input");
             this.displayOptionEleven()           	
        }
    }
    
}

let Phone = new PhoneBooK();
Phone.mainMenu();
// user_input = 0
// user_input1 = 0
// user_input2 = 0
// user_input3 = 0
// user_input4 = 0
// user_input5 = 0
// user_input6 = 0
// select_number = 0;
    
// print("Menu Function\n")
// print("1. Phone Book\n")
// print("2. Messages\n")
// print("3. Chat\n")
// print("4. Call Register\n")
// print("5. Tones\n")
// print("6. Settings\n")
// print("7. Call Divert\n")
// print("8. Games\n");
// print("9. Calculator\n")
// print("10. Reminders\n")
// print("11. Clock\n")
// print("12. Profiles \n")
// print("13. SIM services\n")

// user_input = int(input("Select the number for the page you want to open \n"))
// match user_input:
// 	case 1:
// 		print()
// 		print("\tPhone Book ")
// 		print("1. Search\n")
// 		print("2. Services Nos\n")
// 		print("3. Add name\n")
// 		print("4. Erase\n")
// 		print("5. Edit\n")
// 		print("6. Assign Tone\n")
// 		print("7. Send b'card \n")
// 		print("8. Options \n")
// 		print("9. Speed dials\n")
// 		print("10. Voice tags\n")

// 		user_input1 = int(input("Select the number for the page you want to open \n"))
// 		print()
// 		
		
// 	case 2:
// 		print()
// 		print("\tMessages ")
// 		print("1. write messages\n")
// 		print("2. inbox \n")
// 		print("3. Outbox\n")
// 		print("4. Pictures messages\n")
// 		print("5. Templates\n")
// 		print("6. Smileys\n")
// 		print("7. Message Setting \n")
// 		print("8. Info Service\n")
// 		print("9. Voice mailbox number\n") 
// 		print("10. Service Command editor\n")
			
// 		user_input2 = (input("Select the number for the page you want to open \n"))

// 		print()
// 		match user_input:
// 			case 1:
				
// 				print("Write messages\n")
		
		
// 			case 2:
// 				print("Inbox\n")
			
// 			case 3:
// 				print("Outbox \n")
			

// 			case 4:
// 				print("Picture messages\n")

// 			case 5:
// 				print("Templates\n")

// 			case 6:
// 				print("Smileys\n")

// 			case 7:
// 				print("\tMessage Settings")
// 				print()
// 				print("1. set 1 \n")
// 				print("2. common  3 \n")

// 				select_number = int(input("Select the number for the page you want to open \n"))
					 
// 				if select_number ==1:
// 					print()
// 					print("\tSet 1 \n")
// 					print(" Message centre number\n")
// 					print(" Message sent as\n")
// 					print(" Message validity\n")
				
				
// 				elif select_number==2:
// 					print()
// 					print("\tcommon 3\n")
// 					print(" Delivery reports\n")
// 					print(" Reply via Same centre\n")
// 					print(" Character support\n")
				

			

// 			case 8:
// 				print("Info Service\n")
// 			case 9:
// 				print("Voice mailbox number\n")

// 			case 10:
// 				print("Service command editor\n")
		
// 	case 3:
// 		print("Chat\n")	
		
// 	case 4:
// 		print()
// 		print("\tCall Register \n")

// 		print("1. Missed calls \n")
// 		print("2. Recieved calls \n")
// 		print("3. Dailed Number \n")
// 		print("4. Erase recent call list\n")
		
// 		user_input3 = int(input("Select the number for the page you want to open \n"))

// 		print()
// 		match user_input3:	
// 			case 1:
// 				print(" Missed calls \n")
				
// 			case 2:
// 				print(" Recieved calls \n")
				
// 			case 3:
// 				print(" Dailed Number \n")
				
// 			case 4:
// 				print(" Erase recent call list")
// 			case 5:
// 				print("\tShow call duration \n")
// 				print("1.Last call duration \n")
// 				print("2. All calls' duration \n")
// 				print("3. Received calls' duration \n")
// 				print("4. Dialed Calls' duration \n")
// 				print("5. Clear timers \n ")
				
// 			case 6:
// 				print()
// 				print("\tshow call cost\n")
// 				print("1. Last call cost \n")
// 				print("2. All calls' cost \n")
// 				print("3. Clear counters\n")
				
// 			case 7:
// 				print()
// 				print("\tcost call setting\n")
// 				print(" Call cost limit\n")
// 				print("Show cost in \n")
// 			case 8:
// 				print()
// 				print("Prepaid credit")
				
// 	case 5:
// 		print()
// 		print("\tTones \n")
// 		print("1. Ringing tone \n")
// 		print("2. Ringing volume \n")
// 		print("3. Incoming call alert \n")
// 		print("4. Composer\n")
// 		print("5. Message alert tone\n")
// 		print("6. Keyboard tone \n")
// 		print("7. Warning and game tone \n")
// 		print("8. Vibrating alert \n")
// 		print("9. Screen saver \n")
	

// 		user_input4 = int(input("Select the number for the page you want to open \n"))
// 		print()
// 		match user_input4:
// 			case 1:
// 				print("Ringing tone \n")
			
// 			case 2:
// 				print("Ringing volume \n")
			
// 			case 3:
// 				print(" Incoming call alert \n")
				
// 			case 4:
// 				print(" Composer\n")
				
// 			case 5:
// 				print(" Message alert tone \n")
				
// 			case 6:
// 				print(" Keyboard tones  \n")
				
// 			case 7:
// 				print(" Warning and games tone \n")
				
// 			case 8:
// 				print(" Vibrating alert\n")
			
// 			case 9:
// 				print(" Screen saver\n")
	
// 	case 6:
// 		System.out.println("\tSettings\n");
// 		System.out.println("1. Call setting \n");
// 		System.out.println("2. Phone setting\n");
// 		System.out.println("3. Security setiing \n");
// 		System.out.println("4. Restore factory setting\n");
		
// 		user_input5 = int(input("Select the number for the page you want to open \n"))

// 		print()
// 		match user_input5:
// 			case 1:
// 				print("\t Call setting\n")
// 				print("Automatic redail \n")
// 				print(" Speed dialing  \n")
// 				print(" Call waiting option \n")
// 				print("Own number setting\n")
// 				print("Phone line in use \n")
// 				print("Automatic answer\n")
			

// 			case 2:
// 				print("\t Phone setting\n")
// 				print("language \n")
// 				print(" Cell info display  \n")
// 				print(" Welcome note \n")
// 				print("Network selection\n")
// 				print("Lights \n")
// 				print("Confirm SIM service actions\n")

// 			case 3:
// 				print("\t Security setting\n")
// 				print("Pincode request \n")
// 				print(" Call barring service \n")
// 				print(" Fixed dialing \n")
// 				print("Closed user group\n")
// 				print("Phone security\n")
// 				print("Change access code\n")
			
// 			case 4:
// 				print("Restore factory settings\n")
	
// 	case 7:
// 		print("Call divert\n")
		
// 	case 8:
// 		print("Games\n")
	
// 	case 9:
// 		print("Calculator\n")
	
// 	case 10:
// 		print("Reminder")
	
// 	case 11:
// 		print()
// 		print("2. Clock settings\n")
// 		println("3. Date setting\n")
// 		print("4. Stopwatch \n");
// 		print("5. Count down timer")
// 		print("6. Auto update of date and time\n")
// 		print()

// 		user_input6 = int(input("Select the number for the page you want to open \n"))
			 	
// 		print()
// 		match user_input6:

// 			case 1:
// 				print("Alarm clock\n")
				
// 			case 2:
// 				print("Clock setting\n")
				
// 			case 3:
// 				print("date setting\n")
				
// 			case 4:
// 				print("Stopwatch\n")
				
// 			case 5:
// 				print("COunt down timer \n")
				
// 			case 6:
// 				print("Auto update of date and time\n")

// 	case 12:
// 		print("Profiles")
// 	case 13:
// 		print("SIM services")
		
 

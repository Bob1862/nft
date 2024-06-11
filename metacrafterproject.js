// Creating an array varible named as my_nfts to hold my NFTs 
let my_nfts = [];

/*Create a variable that can hold a number of NFT's. What type of variable might this be? 
Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
The metadata values will be passed to the function as parameters. When the NFT is ready, 
you will store it in the variable you created in step 1
Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
For good measure, getTotalSupply() should return the number of NFT's you have created*/

function mintNFT(noOfNFT, firstName, lastName, hairColor, gender, region) {
    // Now creating an object to hold the metadata for the NFT
    const nft = {
        noOfNFT: noOfNFT,
        firstName: firstName,
        lastName: lastName,
        hairColor: hairColor,
        gender: gender,
        region: region
    };
    
    // Now as i learnt through the lecture in "manipulating arrays with push method", using that
    // so now storing the NFT in the my_nfts array that we have created in the beginning
    my_nfts.push(nft);
}

// now acoording to the question, creating a " for loop" that will go through an "array" of NFTs (i.e my_nfts)
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < my_nfts.length; i++) {
        console.log("noOfNFT: " + my_nfts[i].noOfNFT);
        console.log("First Name: " + my_nfts[i].firstName);
        console.log("Last Name: " + my_nfts[i].lastName);
        console.log("Hair Color: " + my_nfts[i].hairColor);
        console.log("Gender: " + my_nfts[i].gender);
        console.log("Region: " + my_nfts[i].region);
        console.log("<<<<<------------------------>>>>>");
    }
}

// now for more clear informaation about the data i hve added a function named as "getTotalSupply"
// printing the total number of NFTs we have minted to the console
function getTotalSupply() {
    return my_nfts.length;
}

// Mint a few NFTs
mintNFT("1","Ashwani", "Singh", "Black", "Male", "India");
mintNFT("2","Anupreet", "Kaur", "Golden Brown", "Female", "India");
mintNFT("3","Joe", "Biden", "White", "Male", "USA");

// NOw calling the function in which i have my stored NFTs i.e. list of all NFTs
listNFTs();

// At last printing the total number of NFTs
console.log("Total number of NFTs Added: " + getTotalSupply());

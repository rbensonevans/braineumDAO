console.log("hello world");

// connect to Moralis server
Moralis.initialize("KG3tWMC5GJm480yLfKJT9ZzFHMKPU5X0SEsp7U6k");
Moralis.serverURL = "https://gchcu6r5aawy.moralishost.com:2053/server";

let homepage = "http://127.0.0.1:5500/braineumdao_wallet/index.html";
if (Moralis.User.current() == null && window.location.href != homepage) {
    document.querySelector('body').style.display = 'none'; 
    window.location.href = "index.html";
}


login = async () => {
    await Moralis.authenticate().then(async function (user) {
        console.log('logged in');
        //console.log(Moralis.User.current());
        user.set("name", document.getElementById('user-username').value);
        user.set("email", document.getElementById('user-email').value);
        await user.save();
        window.location.href = "dashboard.html";
    })
}

logout = async () => {
    await Moralis.User.logOut();
    window.location.href = "index.html";
} 



if (document.querySelector('#btn-login') != null) {
    document.querySelector('#btn-login').onclick = login;
}

if (document.querySelector('#btn-logout') != null) {
    document.querySelector('#btn-logout').onclick = logout;
}

// BRAINEUM DAO STUFF


displayHome = async () => {
    console.log('display-home-link clicked');
    //let displayHomeLink = document.querySelector("#DisplayHomeLink");
    let displayHomeLink = document.querySelector("#DisplayPageLink");
    let displayHomeHeading= document.querySelector("#DisplayPageHeading");
    displayHomeHeading.innerHTML = "BraineumDAO Ecosystem -- A Governance Structure";

    let content =
   ` 
              <div style="text-align: center;">  
              <h3>Booting up the Braineum Ecosystem</h3>
              <h4>Testnet rollout only</h4>
              </br>
    <img class="mb-4" src="amenhotep-iii.jpg" alt="" width="200" height="250">
    </div

    `
    displayHomeLink.innerHTML = content;

}

displayGenesis = async () => {
    console.log('display-genesis-link clicked');
    //let displayGenesisLink = document.querySelector("#DisplayGenesisLink");
    let displayGenesisLink = document.querySelector("#DisplayPageLink");
    let displayGenesisHeading= document.querySelector("#DisplayPageHeading");
    displayGenesisHeading.innerHTML = "GenesisDAO -- An Ecosystem Index";



    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2Cc159Ad24C4a5777C6205ef6601c92bd8332261",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRDT");

    let content = 
    `
    <h5>DAO tokens measure the value of the ecosystem in millions of dollars.</h5>

    <table class="table">
    <thead>
        <tr>
            <th scope="col">Chain</th>
            <th scope="col">Balance</th>
            <th scope="col">Ecosystem Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Rinkeby</td>
            <td>${(total_supply / 1e18).toFixed(0) + " BRDT"}</td>
            <td>5 (in millions)</td>
            </tr>
    </tbody>
    </table>  

    <div style="text-align: center;">
    <img class="mb-4" src="eth-candlestick.jpeg" alt="" width="600" height="300">
    </div>
    `
    displayGenesisLink.innerHTML = content;
}


displayOrganizer = async () => {
    console.log('display-organizer-link clicked');
    //let displayOrganizerLink = document.querySelector("#DisplayOrganizerLink");
    let displayOrganizerLink = document.querySelector("#DisplayPageLink");
    let displayOrganizerHeading= document.querySelector("#DisplayPageHeading");
    displayOrganizerHeading.innerHTML = "OrganizerDAO";
    let content = `
        <h3>Not yet implemented</h3>
    `
    displayOrganizerLink.innerHTML = content;

}

displayMint = async () => {
    console.log('display-mint-link clicked');
    //let displayMintLink = document.querySelector("#DisplayMintLink");
    let displayMintLink = document.querySelector("#DisplayPageLink");
    let displayMintHeading= document.querySelector("#DisplayPageHeading");
    displayMintHeading.innerHTML = "MintDAO";
    let content = `           
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Tokens</th>
            <th scope="col">Max Amount</th>
            <th scope="col">In Circulation</th>
            <th scope="col">Date Created</th>
            <th scope="col">% share</th>
            <th scope="col">USD Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>BVDAOToken</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>1/1/2020</td>
        <td>60%/40%</td>
        <td>$5.35</td>
        </tr>
        <tr>
        <td>BSDAOToken</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>1/1/2020</td>
        <td>60%/40%</td>
        <td>$5.35</td>
        </tr>
        <tr>
        <td>BDAOToken</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>1/1/2020</td>
        <td>60%/40%</td>
        <td>$5.35</td>
        </tr>
        <tr>
        <td>BVStableTokens</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>1/1/2020</td>
        <td>60%/40%</td>
        <td>$5.35</td>
        </tr>
    </tbody>
    </table>
    `
    displayMintLink.innerHTML = content;

    let openIssues =
    `<p>Open Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayMintLink.innerHTML += openIssues;

    let closedIssues = 
    `<p>Closed Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayMintLink.innerHTML += closedIssues;
}


displayTreasury = async () => {
    console.log('display-treasury-link clicked');
    //let displayTreasuryLink = document.querySelector("#DisplayTreasuryLink");
    let displayTreasuryLink = document.querySelector("#DisplayPageLink");
    let displayTreasuryHeading= document.querySelector("#DisplayPageHeading");
    displayTreasuryHeading.innerHTML = "TreasuryDAO";
    let content = `           
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Tokens</th>
            <th scope="col">Max Amount</th>
            <th scope="col">In Circulation</th>
            <th scope="col">USD Price</th>
            <th scope="col">Market Value</th>
            <th scope="col">Date Created</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>BVDAOToken</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>$5.35</td>
        <td>95,000,000</td>
        <td>1/1/2020</td>
        </tr>
        <tr>
        <td>BSDAOToken</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>$5.35</td>
        <td>95,000,000</td>
        <td>1/1/2020</td>
        </tr>
        <tr>
        <td>BDAOToken</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>$5.35</td>
        <td>95,000,000</td>
        <td>1/1/2020</td>
        </tr>
        <tr>
        <td>BVStableTokens</td>
        <td>1,0000,000,000</td>
        <td>35,000,000</td>
        <td>$5.35</td>
        <td>95,000,000</td>
        <td>1/1/2020</td>
        </tr>
    </tbody>
    </table>
    `
    displayTreasuryLink.innerHTML = content;
}


displayArbitration = async () => {
    console.log('display-arbitration-link clicked');
    //let displayArbitrationLink = document.querySelector("#DisplayArbitrationLink");
    let displayArbitrationLink = document.querySelector("#DisplayPageLink");
    let displayArbitrationHeading= document.querySelector("#DisplayPageHeading");
    displayArbitrationHeading.innerHTML = "ArbitrationDAO";
    
    let content = ``;
    displayArbitrationLink.innerHTML = content;

    let openIssues =
    `<p>Open Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayArbitrationLink.innerHTML += openIssues;

    let closedIssues = 
    `<p>Closed Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayArbitrationLink.innerHTML += closedIssues;
}

displayBraineumGalacticDao = async () => {
    console.log('display-braineumgalacticdao-link clicked');
    let displayBraineumGalacticDaoLink = document.querySelector("#DisplayPageLink");
    let displayBraineumGalacticDaoHeading= document.querySelector("#DisplayPageHeading");
    displayBraineumGalacticDaoHeading.innerHTML = "BraineumGalacticDAO -- The Galactic A.I.-Driven Computer";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
                contractAddress: "0x6E33d7d875C21D37283ABC13F53195C9428B26d3",
                functionName: "totalSupply",
                abi: abi_totalSupply                
            };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);

    console.log((total_supply / 1e18).toFixed(0) + " BRGT");

    dao_supply = total_supply * .02;
    community_supply = total_supply * .48;
    company_supply = total_supply * .5;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${(total_supply / 1e18).toFixed(0) + " BRGT"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRGT"}</td>
            <td>2%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
            <td>Community</td>
            <td>${(community_supply / 1e18).toFixed(0) + " BRGT"}</td>
            <td>48%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${(company_supply / 1e18).toFixed(0) + " BRGT"}</td>
            <td>50%</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    </table> 

    <div style="text-align: center;">
    <img class="mb-4" src="braineum_cpu.jpg" alt="" width="600" height="300">
    </div>
    `
    displayBraineumGalacticDaoLink.innerHTML = content;
}


displayBraineumStashDao = async () => {
    console.log('display-braineumstashdao-link clicked');
    let displayBraineumStashDaoLink = document.querySelector("#DisplayPageLink");
    let displayBraineumStashDaoHeading= document.querySelector("#DisplayPageHeading");
    displayBraineumStashDaoHeading.innerHTML = "BraineumStashDAO -- Federated Mining is Highly Energy-Efficient";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
                contractAddress: "0x4b93f9711CA45B32029e3750e42cd0DD63adD3f1",
                functionName: "totalSupply",
                abi: abi_totalSupply      
            };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRST");

    dao_supply = total_supply * .02;
    community_supply = total_supply * .48;
    company_supply = total_supply * .5;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${(total_supply / 1e18).toFixed(0) + " BRST"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRST"}</td>
            <td>2%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
            <td>Community</td>
            <td>${(community_supply / 1e18).toFixed(0) + " BRST"}</td>
            <td>48%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${(company_supply / 1e18).toFixed(0) + " BRST"}</td>
            <td>50%</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="braineum_gold_stash.png" alt="" width="600" height="300"> 
    </div>
    `
    displayBraineumStashDaoLink.innerHTML = content;
}

displayBraineumVerse = async () => {
    console.log('display-braineumverse-link clicked');
    //let displayBraineumVerseLink = document.querySelector("#DisplayBraineumVerseLink");
    let displayBraineumVerseLink = document.querySelector("#DisplayPageLink");
    let displayBraineumVerseHeading= document.querySelector("#DisplayPageHeading");
    displayBraineumVerseHeading.innerHTML = "BraineumVerseDAO -- A Real-World Metaverse";


    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2b580473de790072744f548b07c0b4a75b96e421",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRVT");

    let dao_supply = total_supply * .02;
    let community_supply = total_supply * .48;
    let company_supply = total_supply * .5;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${(total_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>2%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
            <td>Community</td>
            <td>${(community_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>48%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${(company_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>50%</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="braineumverse_image_sm.jpeg" alt="" width="600" height="300"> 
    </div>
    `
    displayBraineumVerseLink.innerHTML = content;
}

displayNFZillionaireDao = async () => {
    console.log('display-nfzillionaire-link clicked');
    //let displayNFZillionaireLink = document.querySelector("#DisplayNFZillionaireLink");
    let displayNFZillionaireLink = document.querySelector("#DisplayPageLink");
    let displayNFZillionaireHeading= document.querySelector("#DisplayPageHeading");
    displayNFZillionaireHeading.innerHTML = "NFZillionaireDAO -- Real Estate as NFTs";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x646433Ba32596f2bc1198C2D1BFA3571c84077Ff",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " NFZT");

    let dao_supply = total_supply * .02;
    let community_supply = total_supply * .48;
    let company_supply = total_supply * .5;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${(total_supply / 1e18).toFixed(0) + " NFZT"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " NFZT"}</td>
            <td>2%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
            <td>Community</td>
            <td>${(community_supply / 1e18).toFixed(0) + " NFZT"}</td>
            <td>48%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${(company_supply / 1e18).toFixed(0) + " NFZT"}</td>
            <td>50%</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="manhattan_empire_state_bldg.jpeg" alt="" width="600" height="300"> 
    </div>
    `
    displayNFZillionaireLink.innerHTML = content;
}

displayShuttleXFinanceDao = async () => {
    console.log('display-shuttlexfinance-link clicked');
    //let displayShuttleXFinanceLink = document.querySelector("#DisplayShuttleXFinanceLink");
    let displayShuttleXFinanceLink = document.querySelector("#DisplayPageLink");
    let displayShuttleXFinanceHeading= document.querySelector("#DisplayPageHeading");
    displayShuttleXFinanceHeading.innerHTML = "ShuttleXFinanceDAO -- Insurance and Fixed Income Instruments";


    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0xad730AE6F9aE160f39BfB56b5F696B4A9f4AFac8",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " SXFT");

    let dao_supply = total_supply * .02;
    let community_supply = total_supply * .48;
    let company_supply = total_supply * .5;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${(total_supply / 1e18).toFixed(0) + " SXFT"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " SXFT"}</td>
            <td>2%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
            <td>Community</td>
            <td>${(community_supply / 1e18).toFixed(0) + " SXFT"}</td>
            <td>48%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${(company_supply / 1e18).toFixed(0) + " SXFT"}</td>
            <td>50%</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="space_shuttle_x.jpeg" alt="" width="300" height="200"> 
    </div>
    `
    displayShuttleXFinanceLink.innerHTML = content;
}

displayBraineumVCDAO = async () => {
    console.log('display-braineumvcdao-link clicked');
    let displayBraineumVCLink = document.querySelector("#DisplayPageLink");
    let displayBraineumVCHeading= document.querySelector("#DisplayPageHeading");
    displayBraineumVCHeading.innerHTML = "BraineumVCDAO -- Startups and Ecosystem Growth";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0xea9Fc8F95Ffc32d48eb3141387Ee2c3e8F6e91b6",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRVC");

    dao_supply = total_supply * .02;
    community_supply = total_supply * .48;
    company_supply = total_supply * .5;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${(total_supply / 1e18).toFixed(0) + " BRVC"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVC"}</td>
            <td>2%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
            <td>Community</td>
            <td>${(community_supply / 1e18).toFixed(0) + " BRVC"}</td>
            <td>48%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>Company</td>
            <td>${(company_supply / 1e18).toFixed(0) + " BRVC"}</td>
            <td>50%</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
        <td>No Projects Funded</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
    </tr>
    </tbody>
    </table>
    <div style="text-align: center;">
    <img class="mb-4" src="crypto_exchanges.jpeg" alt="" width="600" height="300">
    </div>
    `  

    displayBraineumVCLink.innerHTML = content;
}

displayDeFi = async () => {
    console.log('display-defi-link clicked');
    //let displayDeFiLink = document.querySelector("#DisplayDeFiLink");
    let displayDeFiLink = document.querySelector("#DisplayPageLink");
    let displayDeFiHeading= document.querySelector("#DisplayPageHeading");
    displayDeFiHeading.innerHTML = "DeFiDAO -- Re-engineering Finance and WallStreet";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2b580473de790072744f548b07c0b4a75b96e421",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(5) + " BRVT");

    let dao_supply = total_supply * .001;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>.10%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="defi_image.jpeg" alt="" width="600" height="300"> 
    </div>
    `
    displayDeFiLink.innerHTML = content;

}


displayToken = async () => {
    console.log('display-token-link clicked');
    //let displayTokenLink = document.querySelector("#DisplayTokenLink");
    let displayTokenLink = document.querySelector("#DisplayPageLink");
    let displayTokenHeading= document.querySelector("#DisplayPageHeading");
    displayTokenHeading.innerHTML = "TokenomicsDAO -- Creating New Digital Economies";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2b580473de790072744f548b07c0b4a75b96e421",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRVT");

    let dao_supply = total_supply * .0015;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>.15%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="tokenomics_image.jpeg" alt="" width="600" height="300"> 
    </div>
    `  
    displayTokenLink.innerHTML = content;

}


displayNFT = async () => {
    console.log('display-nft-link clicked');
    //let displayNFTLink = document.querySelector("#DisplayNFTLink");
    let displayNFTLink = document.querySelector("#DisplayPageLink");
    let displayNFTHeading= document.querySelector("#DisplayPageHeading");
    displayNFTHeading.innerHTML = "NFTDAO -- Digital Art is New Money";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2b580473de790072744f548b07c0b4a75b96e421",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRVT");

    let dao_supply = total_supply * .0011;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>.11%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="DollarScholar-NFT.jpeg" alt="" width="600" height="300"> 
    </div>
    `  
    displayNFTLink.innerHTML = content;
}



displayGameFi = async () => {
    console.log('display-gamefi-link clicked');
    //let displayGameFiLink = document.querySelector("#DisplayGameFiLink");
    let displayGameFiLink = document.querySelector("#DisplayPageLink");
    let displayGameFiHeading= document.querySelector("#DisplayPageHeading");
    displayGameFiHeading.innerHTML = "GameFiDAO -- Play to Earn and Prosper";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2b580473de790072744f548b07c0b4a75b96e421",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRVT");

    let dao_supply = total_supply * .0013;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>.13%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="Play-to-Earn-GameFi.jpeg" alt="" width="600" height="300"> 
    </div>
    `  
    displayGameFiLink.innerHTML = content;

}

displayAI = async () => {
    console.log('display-ai-link clicked');
    //let displayAILink = document.querySelector("#DisplayAILink");
    let displayAILink = document.querySelector("#DisplayPageLink");
    let displayAIHeading= document.querySelector("#DisplayPageHeading");
    displayAIHeading.innerHTML = "AIDAO -- Exploring the A.I. Future.";

    abi_totalSupply = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

    options_5 = {
        contractAddress: "0x2b580473de790072744f548b07c0b4a75b96e421",
        functionName: "totalSupply",
        abi: abi_totalSupply      
    };
    await Moralis.enable();
    total_supply = await Moralis.executeFunction(options_5);
    console.log((total_supply / 1e18).toFixed(0) + " BRVT");

    let dao_supply = total_supply * .0016;
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
            <tr>
            <td>DAO</td>
            <td>${(dao_supply / 1e18).toFixed(0) + " BRVT"}</td>
            <td>.16%</td>
            <td>&nbsp;</td>
            </tr>
        <tr>
    </tbody>
    </table> 
    <div style="text-align: center;">
    <img class="mb-4" src="ai-machine-learning.jpeg" alt="" width="600" height="300"> 
    </div>
    `  
    displayAILink.innerHTML = content;
}

/*
displayCountry = async () => {
    console.log('display-country-link clicked');
    //let displayCountryLink = document.querySelector("#DisplayCountryLink");
    let displayCountryLink = document.querySelector("#DisplayPageLink");
    let displayCountryHeading= document.querySelector("#DisplayPageHeading");
    displayCountryHeading.innerHTML = "CountryDAO";

    let dao_supply = "12,000,000";
    let content = 
    `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Breakdown</th>
            <th scope="col">Balance</th>
            <th scope="col">Percent</th>           
            <th scope="col">Chain</th>           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Supply</td>
            <td>${dao_supply + " BRVT"}</td>
            <td>100%</td>
            <td>Rinkeby</td>
        </tr>
    </tbody>
    </table>
    `  
    displayCountryLink.innerHTML = content;

}
*/


/*
displayMyStats = async () => {
    console.log('display-mystats-link clicked');
    //let displayMyStatsLink = document.querySelector("#DisplayMyStatsLink");
    let displayMyStatsLink = document.querySelector("#DisplayPageLink");
    let displayMyStatsHeading= document.querySelector("#DisplayPageHeading");
    displayMyStatsHeading.innerHTML = "MyStats";
    
    let content = ``;
    displayMyStatsLink.innerHTML = content;

    let openIssues =
    `<p>Open Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayMyStatsLink.innerHTML += openIssues;

}



displayHotIssues = async () => {
    console.log('display-hotissues-link clicked');
    //let displayHotIssuesLink = document.querySelector("#DisplayHotIssuesLink");
    let displayHotIssuesLink = document.querySelector("#DisplayPageLink");
    let displayHotIssuesHeading= document.querySelector("#DisplayPageHeading");
    displayHotIssuesHeading.innerHTML = "HotIssues";
    
    let content = ``;
    displayHotIssuesLink.innerHTML = content;

    let openIssues =
    `<p>Open Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayHotIssuesLink.innerHTML += openIssues;

}


displayVoteTrades = async () => {
    console.log('display-votetrades-link clicked');
    renderContent("#DisplayVoteTradesLink");

    //let displayVoteTradesLink = document.querySelector("#DisplayVoteTradesLink");
    let displayVoteTradesLink = document.querySelector("#DisplayPageLink");
    let displayVoteTradesHeading= document.querySelector("#DisplayPageHeading");
    displayVoteTradesHeading.innerHTML = "VoteTrades";
    
    let content = ``;
    displayVoteTradesLink.innerHTML = content;

    let openIssues =
    `<p>Open Issues</p>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Issue</th>
            <th scope="col">Vote Count</th>
            <th scope="col">User</th>
            <th scope="col">Begin Date</th>
            <th scope="col">End Date</th>"
        </tr>
    </thead>
    <tbody
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
        <tr>
        <td>increase BVDAOtokens</td>
        <td>90,000</td>
        <td>Joe schmoe</td>
        <td>1/1/2021</td>
        <td>12/31/2021</td>"
        </tr>
    </tbody>
    </table>
    `
    displayVoteTradesLink.innerHTML += openIssues;
}

*/


/*
if (document.querySelector('#display-votetrades-link') != null) {
    document.querySelector('#display-votetrades-link').onclick = displayVoteTrades;
}



if (document.querySelector('#display-hotissues-link') != null) {
    document.querySelector('#display-hotissues-link').onclick = displayHotIssues;
}


if (document.querySelector('#display-mystats-link') != null) {
    document.querySelector('#display-mystats-link').onclick = displayMyStats;
}

/*
if (document.querySelector('#display-country-link') != null) {
    document.querySelector('#display-country-link').onclick = displayCountry;
}
*/

if (document.querySelector('#display-braineumvcdao-link') != null) {
    document.querySelector('#display-braineumvcdao-link').onclick = displayBraineumVCDAO;
}


if (document.querySelector('#display-gamefi-link') != null) {
    document.querySelector('#display-gamefi-link').onclick = displayGameFi;
}


if (document.querySelector('#display-nft-link') != null) {
    document.querySelector('#display-nft-link').onclick = displayNFT;
}


if (document.querySelector('#display-token-link') != null) {
    document.querySelector('#display-token-link').onclick = displayToken;
}


if (document.querySelector('#display-defi-link') != null) {
    document.querySelector('#display-defi-link').onclick = displayDeFi;
}


if (document.querySelector('#display-braineumverse-link') != null) {
    document.querySelector('#display-braineumverse-link').onclick = displayBraineumVerse;
}


if (document.querySelector('#display-ai-link') != null) {
    document.querySelector('#display-ai-link').onclick = displayAI;
}


if (document.querySelector('#display-arbitration-link') != null) {
    document.querySelector('#display-arbitration-link').onclick = displayArbitration;
}


if (document.querySelector('#display-treasury-link') != null) {
    document.querySelector('#display-treasury-link').onclick = displayTreasury;
}


if (document.querySelector('#display-braineumgalacticdao-link') != null) {
    document.querySelector('#display-braineumgalacticdao-link').onclick = displayBraineumGalacticDao;
}

if (document.querySelector('#display-braineumstashdao-link') != null) {
    document.querySelector('#display-braineumstashdao-link').onclick = displayBraineumStashDao;
}

if (document.querySelector('#display-nfzillionaire-link') != null) {
    document.querySelector('#display-nfzillionaire-link').onclick = displayNFZillionaireDao;
}

if (document.querySelector('#display-shuttlexfinance-link') != null) {
    document.querySelector('#display-shuttlexfinance-link').onclick = displayShuttleXFinanceDao;
}

if (document.querySelector('#display-mint-link') != null) {
    document.querySelector('#display-mint-link').onclick = displayMint;
}

if (document.querySelector('#display-home-link') != null) {
    document.querySelector('#display-home-link').onclick = displayHome;
}

if (document.querySelector('#display-genesis-link') != null) {
    document.querySelector('#display-genesis-link').onclick = displayGenesis;
}

if (document.querySelector('#display-organizer-link') != null) {
    document.querySelector('#display-organizer-link').onclick = displayOrganizer;
}

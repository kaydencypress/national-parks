let npsApiObj = {};
const https = require('https');
const url = require('url');
const fetch = require("node-fetch");

npsApiObj.activities = [ 
  { id: '09DF0950-D319-4557-A57E-04CD2F63FF42',
    name: 'Arts and Culture',
    class: 'fas fa-theater-masks',
	searchable: true},
  { id: '13A57703-BB1A-41A2-94B8-53B692EB7238',
    name: 'Astronomy',
    class: 'far fa-star',
    searchable: true},
  { id: '5F723BAD-7359-48FC-98FA-631592256E35',
    name: 'Auto and ATV',
    class: 'fas fa-truck-monster',
    searchable: true},
  { id: '7CE6E935-F839-4FEC-A63E-052B1DEF39D2',
    name: 'Biking',
    class: 'fas fa-bicycle',
    searchable: true},
  { id: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E',
    name: 'Boating',
    class: 'fas fa-ship',
    searchable: true},
  { id: 'A59947B7-3376-49B4-AD02-C0423E08C5F7',
    name: 'Camping',
    class: 'fas fa-campground',
    searchable: true},
  { id: '07CBCA6A-46B8-413F-8B6C-ABEDEBF9853E',
    name: 'Canyoneering',
    class: 'fas fa-hiking',
    searchable: true},
  { id: 'BA316D0F-92AE-4E00-8C80-DBD605DC58C3',
    name: 'Caving',
    class: 'fas fa-hiking',
    searchable: true},
  { id: 'B12FAAB9-713F-4B38-83E4-A273F5A43C77',
    name: 'Climbing',
    class: 'far fa-hand-rock',
    searchable: true},
  { id: 'C11D3746-5063-4BD0-B245-7178D1AD866C',
    name: 'Compass and GPS',
    class: 'far fa-compass',
    searchable: true},
  { id: '8C495067-8E94-4D78-BBD4-3379DACF6550',
    name: 'Dog Sledding',
    class: 'fas fa-dog',
    searchable: true},
  { id: 'AE42B46C-E4B7-4889-A122-08FE180371AE',
    name: 'Fishing',
    class: 'fas fa-fish',
    searchable: true},
  { id: 'D72206E4-6CD1-4441-A355-F8F1827466B1',
    name: 'Flying',
    class: 'fab fa-fly',
    searchable: true},
  { id: '1DFACD97-1B9C-4F5A-80F2-05593604799E',
    name: 'Food',
    class: 'fas fa-pizza-slice',
    searchable: true},
  { id: '3F3ABD16-2C52-4EAA-A1F6-4235DE5686F0',
    name: 'Golfing',
    class: 'fas fa-golf-ball',
    searchable: true},
  { id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3',
    name: 'Guided Tours',
    class: 'fas fa-directions',
    searchable: true},
  { id: '42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A',
    name: 'Hands-On',
    class: 'fas fa-hand-paper',
    searchable: true},
  { id: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA',
    name: 'Hiking',
    class: 'fas fa-hiking',
    searchable: true},
  { id: '0307955A-B65C-4CE4-A780-EB36BAAADF0B',
    name: 'Horse Trekking',
    class: 'fas fa-horse',
    searchable: true},
  { id: '8386EEAF-985F-4DE8-9037-CCF91975AC94',
    name: 'Hunting and Gathering',
    class: 'fas fa-seedling',
    searchable: true},
  { id: '5FF5B286-E9C3-430E-B612-3380D8138600',
    name: 'Ice Skating',
    class: 'fas fa-skating',
    searchable: true},
  { id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25',
    name: 'Junior Ranger Program',
    class: 'fas fa-vest-patches',
    searchable: true},
  { id: 'B204DE60-5A24-43DD-8902-C81625A09A74',
    name: 'Living History',
    class: 'fas fa-flag-usa',
    searchable: true},
  { id: 'C8F98B28-3C10-41AE-AA99-092B3B398C43',
    name: 'Museum Exhibits',
    class: 'fas fa-landmark',
    searchable: true},
  { id: '4D224BCA-C127-408B-AC75-A51563C42411',
    name: 'Paddling',
    class: 'fas fa-water',
    searchable: true},
  { id: '0C0D142F-06B5-4BE1-8B44-491B90F93DEB',
    name: 'Park Film',
    class: 'fas fa-film',
    searchable: true},
  { id: '7779241F-A70B-49BC-86F0-829AE332C708',
    name: 'Playground',
    class: 'fas fa-child',
    searchable: true},
  { id: '42CF4021-8524-428E-866A-D33097A4A764',
    name: 'SCUBA Diving',
    class: 'fas fa-fish',
    searchable: true},
  { id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7',
    name: 'Shopping',
    class: 'fas fa-shopping-bag',
    searchable: true},
  { id: 'F9B1D433-6B86-4804-AED7-B50A519A3B7C',
    name: 'Skiing',
    class: 'fas fa-skiing',
    searchable: true},
  { id: '3EBF7EAC-68FC-4754-B6A4-0C38A1583D45',
    name: 'Snorkeling',
    class: 'fas fa-swimmer',
    searchable: true},
  { id: 'C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17',
    name: 'Snow Play',
    class: 'fas fa-snowman',
    searchable: true},
  { id: '7C912B83-1B1B-4807-9B66-97C12211E48E',
    name: 'Snowmobiling',
    class: 'fas fa-sleigh',
    searchable: true},
  { id: '01D717BC-18BB-4FE4-95BA-6B13AD702038',
    name: 'Snowshoeing',
    class: 'fas fa-snowflake',
    searchable: true},
  { id: 'AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2',
    name: 'Surfing',
    class: 'fas fa-water',
    searchable: true},
  { id: '587BB2D3-EC35-41B2-B3F7-A39E2B088AEE',
    name: 'Swimming',
    class: 'fas fa-swimmer',
    searchable: true},
  { id: '94369BFD-F186-477E-8713-AE2A745154DA',
    name: 'Team Sports',
    class: 'fas fa-futbol',
    searchable: true},
  { id: '4D06CEED-90C6-4B69-B264-32CC90B69BA6',
    name: 'Tubing',
    class: 'fas fa-water',
    searchable: true},
  { id: '8A1C7B17-C2C6-4F7C-9539-EA1E19971D80',
    name: 'Water Skiing',
    class: 'fas fa-water',
    searchable: true},
  { id: '0B685688-3405-4E2A-ABBA-E3069492EC50',
    name: 'Wildlife Watching',
    class: 'fas fa-kiwi-bird',
    searchable: true},
{ 	id:	 'C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4',	
 	name:	 'Picnicking',
	relatedActivityId: '1DFACD97-1B9C-4F5A-80F2-05593604799E'},
{ 	id:	 '5A2C91D1-50EC-4B24-8BED-A2E11A1892DF',	
 	name:	 'Birdwatching',
	relatedActivityId: '0B685688-3405-4E2A-ABBA-E3069492EC50'},
{ 	id:	 '467DC8B8-0B7D-436D-A026-80A22358F615',	
 	name:	 'Bookstore and Park Store',
	relatedActivityId: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7'},
{ 	id:	 '43800AD1-D439-40F3-AAB3-9FB651FE45BB',	
 	name:	 'Gift Shop and Souvenirs',
	relatedActivityId: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7'},
  { id:	 'FAED7F97-3474-4C21-AB42-FB0768A2F826',	
 	name:	 'Cultural Demonstrations',
	relatedActivityId: '09DF0950-D319-4557-A57E-04CD2F63FF42'},
  { id:	 '7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C',	
 	name:	 'Group Camping',
	relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 '87D3B1CD-3903-4561-ABB1-2DD870C43F2F',	
 	name:	 'Rock Climbing' ,
	relatedActivityId: 'B12FAAB9-713F-4B38-83E4-A273F5A43C77'},
  { id:	 'CA3641A0-FADC-497F-B036-3FE426D0DDCC',	
 	name:	 'Geocaching' ,
	relatedActivityId: 'C11D3746-5063-4BD0-B245-7178D1AD866C'},
  { id:	 '25FB188F-5AAD-459A-9092-28A9801709FF',	
 	name:	 'Freshwater Fishing' ,
	relatedActivityId: 'AE42B46C-E4B7-4889-A122-08FE180371AE'},
  { id:	 '9BC03FAF-28F1-4609-BF6F-643F58071AED',	
 	name:	 'Fly Fishing' ,
	relatedActivityId: 'AE42B46C-E4B7-4889-A122-08FE180371AE'},
  { id:	 '17411C8D-5769-4D0F-ABD1-52ED03840C18',	
 	name:	 'Saltwater Fishing' , 	
   relatedActivityId: 'AE42B46C-E4B7-4889-A122-08FE180371AE'},
  { id:	 '3DE599E2-22ED-40BF-B383-EDA073563C1E',	
 	name:	 'Bus/Shuttle Guided Tour' , 	
   relatedActivityId: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3'},
  { id:	 '5A241412-0CFB-497A-9B5F-0AB8C03CDE72',	
 	name:	 'Boat Tour' , 	
   relatedActivityId: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3'},
  { id:	 '31F88DA6-696F-441F-89CF-D7B1415C4CB9',	
 	name:	 'Citizen Science' , 	
   relatedActivityId: '42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A'},
  { id:	 '45261C0A-00D8-4C27-A1F8-029F933A0D34',	
 	name:	 'Front-Country Hiking' , 	
   relatedActivityId: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA'},
  { id:	 '1886DA47-0AEC-4568-B9C2-8E9BC316AAAC',	
 	name:	 'Horseback Riding' , 	
   relatedActivityId: '0307955A-B65C-4CE4-A780-EB36BAAADF0B'},
  { id:	 '21DB3AFC-8AAC-4665-BC1F-7198C0685983', 	
 	name:	 'Canoeing' , 	
   relatedActivityId: '4D224BCA-C127-408B-AC75-A51563C42411'},
  { id:	 'F353A9ED-4A08-456E-8DEC-E61974D0FEB6', 	
 	name:	 'Kayaking' , 	
   relatedActivityId: '4D224BCA-C127-408B-AC75-A51563C42411'},
  { id:	 'B3EF12AF-D951-419E-BD3C-6B36CBCC1E16',	
 	name:	 'Stand Up Paddleboarding' , 	
   relatedActivityId: '4D224BCA-C127-408B-AC75-A51563C42411'},
  { id:	 'EAB1EBDE-5B72-493F-8F8F-0EE5B1724436',	
 	name:	 'Cross-Country Skiing' , 	
   relatedActivityId: 'F9B1D433-6B86-4804-AED7-B50A519A3B7C'},
  { id:	 '82C3230F-6F87-452C-A01B-F8458867B26A',	
 	name:	 'Freshwater Swimming' , 	
   relatedActivityId: '587BB2D3-EC35-41B2-B3F7-A39E2B088AEE'},
  { id:	 'C2801992-F34D-4974-A0F2-80FF04309EE4',	
 	name:	 'Saltwater Swimming' , 	
   relatedActivityId: '587BB2D3-EC35-41B2-B3F7-A39E2B088AEE'},
  { id:	 '28880A5B-3D29-41AC-BD8B-24743E7A070F',	
 	name:	 'First Person Interpretation' , 	
   relatedActivityId: 'B204DE60-5A24-43DD-8902-C81625A09A74'},
  { id:	 'A0631906-9672-4583-91DE-113B93DB6B6E',	
 	name:	 'Self-Guided Tours - Walking' , 	
   relatedActivityId: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3'},
  { id:	 '0B4A5320-216D-451A-9990-626E1D5ACE28',	
 	name:	 'Scenic Driving' , 	
   relatedActivityId: '5F723BAD-7359-48FC-98FA-631592256E35'},
  { id:	 '299CB934-88DC-474F-A33D-E43E29A149C2',	
 	name:	 'Mountain Biking' , 	
   relatedActivityId: '7CE6E935-F839-4FEC-A63E-052B1DEF39D2'},
  { id:	 '8D778629-F603-4C50-A121-6F4BB2FE2C4B',	
 	name:	 'Road Biking' , 	
   relatedActivityId: '7CE6E935-F839-4FEC-A63E-052B1DEF39D2'},
  { id:	 'E0E4CE55-3119-46DE-86EB-6817CD8D5F30',	
 	name:	 'Motorized Boating' , 	
   relatedActivityId: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E'},
  { id:	 'BB0B8CD0-BF4C-4517-9980-CFE2D149C7B4', 	
 	name:	 'Sailing' , 	
   relatedActivityId: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E'},
  { id:	 'A510F02B-8938-4679-A4F9-76580BCAE9C7',	
 	name:	 'Boat Tour' , 	
   relatedActivityId: '071BA73C-1D3C-46D4-A53C-00D5602F7F0E'},
  { id:	 '907E8125-15E4-483C-8EAD-B9FA1E85C6F8',	
 	name:	 'Canoe or Kayak Camping', 	
   relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 '9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA',	
 	name:	 'Car or Front Country Camping', 	
   relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 'C5C5971C-E325-4CEB-8C81-EE49A881DF17',	
 	name:	 'RV Camping', 	
   relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 '89DA72D0-16D6-4C1C-89D4-103D94F1F63D',	
 	name:	 'Orienteering' , 	
   relatedActivityId: 'C11D3746-5063-4BD0-B245-7178D1AD866C'},
  { id:	 'C7D5A145-F8EB-4C37-9E92-2F6C6206B196',	
 	name:	 'Self-Guided Tours - Auto' , 	
   relatedActivityId: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3'},
  { id:	 '19A59EFB-DF4B-4049-9EE1-A784CAC9C70C',	
 	name:	 'Arts and Crafts' , 	
   relatedActivityId: '09DF0950-D319-4557-A57E-04CD2F63FF42'},
  { id:	 '256543C7-4322-48B3-8978-765E89AA9431',	
 	name:	 'Canoe or Kayak Camping', 	
   relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 '4A58AF13-E8FB-4530-B41A-97DF0B0C77B7',	
 	name:	 'Backcountry Camping', 	
   relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 '25559F45-F162-4B8B-BEC2-B341034A2AF4', 	
 	name:	 'Hunting' , 	
   relatedActivityId: '8386EEAF-985F-4DE8-9037-CCF91975AC94'},
  { id:	 '75B92BEB-A36D-4064-88B7-92EEC6D17611',	
 	name:	 'Whitewater Rafting' , 	
   relatedActivityId: '4D06CEED-90C6-4B69-B264-32CC90B69BA6'},
  { id:	 'C59E231D-55FC-4B37-BC5B-FF76383951B5',	
 	name:	 'Craft Demonstrations' , 	
   relatedActivityId: '09DF0950-D319-4557-A57E-04CD2F63FF42'},
  { id:	 '237A1662-6018-4115-ABD1-B8CCF827E703',	
 	name:	 'Historic Weapons Demonstration' , 	
   relatedActivityId: 'B204DE60-5A24-43DD-8902-C81625A09A74'},
  { id:	 'C0FFC3D5-0E74-4B6F-B69D-6F95B78906CE',	
 	name:	 'Live Music' , 	
   relatedActivityId: '09DF0950-D319-4557-A57E-04CD2F63FF42'},
  { id:	 'CE84DEFA-D692-4165-96DF-D5FF56002E2F', 	
 	name:	 'Theater' , 	
   relatedActivityId: '09DF0950-D319-4557-A57E-04CD2F63FF42'},
  { id:	 '7503433C-3856-4E82-AFF3-0B1649766ED3',	
 	name:	 'Jet Skiing' , 	
   relatedActivityId: '8A1C7B17-C2C6-4F7C-9539-EA1E19971D80'},
  { id:	 'A8650547-1A30-4222-86C3-A7660A829670',	
 	name:	 'Reenactments' , 	
   relatedActivityId: 'B204DE60-5A24-43DD-8902-C81625A09A74'},
  { id:	 '977B3209-68A2-4BCE-97A9-EA0CAC320664',	
 	name:	 'Mountain Climbing' , 	
   relatedActivityId: 'B12FAAB9-713F-4B38-83E4-A273F5A43C77'},
  { id:	 '7C37B79B-D02D-49EB-9020-3DB8299B748A',	
 	name:	 'Backcountry Hiking' , 	
   relatedActivityId: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA'},
  { id:	 '9456A40A-AF75-4AD3-8BE1-79C4A7DBEDFC',	
 	name:	 'Volunteer Vacation' , 	
   relatedActivityId: '42FD78B9-2B90-4AA9-BC43-F10E9FEA8B5A'},
  { id:	 'DC668D29-297C-4D16-B6F8-89A67D9E19E3',	
 	name:	 'Auto Off-Roading' , 	
   relatedActivityId: '5F723BAD-7359-48FC-98FA-631592256E35'},
  { id:	 '80229F2D-972E-40A8-8860-232551CC30D6',	
 	name:	 'Horse Camping', 	
   relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'},
  { id:	 'EADFAEEB-4D57-49DB-9C58-BF8DC241C24F',	
 	name:	 'Off-Trail Permitted Hiking' , 	
   relatedActivityId: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA'},
  { id:	 'E53E1320-9B17-41DC-86A5-37EB7D622572', 	
 	name:	 'Dining' , 	
   relatedActivityId: '1DFACD97-1B9C-4F5A-80F2-05593604799E'},
  { id:	 '67FDB577-518E-4A3E-B608-E78941116223',	
 	name:	 'Snow Tubing' , 	
   relatedActivityId: 'C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17'},
  { id:	 'C06FE528-9671-4EC1-909F-B7D3720A1D89',	
 	name:	 'Fixed Wing Flying' , 	
   relatedActivityId: 'D72206E4-6CD1-4441-A355-F8F1827466B1'},
  { id:	 '8286295F-0932-4491-9350-280C9848E6AB',	
 	name:	 'Gathering and Foraging' , 	
   relatedActivityId: '8386EEAF-985F-4DE8-9037-CCF91975AC94'},
  { id:	 'BBC79C28-EBA7-4CE9-8614-02D00AA21558',	
 	name:	 'ATV Off-Roading' , 	
   relatedActivityId: '5F723BAD-7359-48FC-98FA-631592256E35'},
  { id:	 '586B4949-8D1B-4F03-8F6D-D1FCFE01AEF4',	
 	name:	 'Pool Swimming' , 	
   relatedActivityId: '587BB2D3-EC35-41B2-B3F7-A39E2B088AEE'},
  { id:	 '0F2CC530-8DD9-4328-98AA-E514918AD206',	
 	name:	 'River Tubing' , 	
   relatedActivityId: '4D06CEED-90C6-4B69-B264-32CC90B69BA6'},
  { id:	 'D99BCDA3-4363-438B-B3A8-06E6EA204C83',	
 	name:	 'Downhill Skiing' ,
	relatedActivityId: 'F9B1D433-6B86-4804-AED7-B50A519A3B7C'}, 
	{ id: 'D37A0003-8317-4F04-8FB0-4CF0A272E195',
    name: 'Stargazing',
	relatedActivityId: '13A57703-BB1A-41A2-94B8-53B692EB7238'},
  { id: 'A59947B7-3376-49B4-AD02-C0423E08C5F7',
    name: 'Horse Camping' ,
    relatedActivityId: 'A59947B7-3376-49B4-AD02-C0423E08C5F7'}
]

// search for parks that match activities and states
npsApiObj.PerformParkSearch = async function (activities,states) {
	// construct api call
	var parkApiUrl = "https://developer.nps.gov/api/v1/activities/parks?id="
	if (activities){
		for (let i=0; i<activities.length;i++) {
			parkApiUrl = parkApiUrl + activities[i] + ","
		}
	}
	// make api call to get raw park data
	return await fetch(parkApiUrl,{headers: {
		"X-API-Key": "pXaQtxZnESvFy2yxzAgjfSRTkA4ZhxZ5QbjTUmpN"}
	})
	.then(response => {
		if (response.ok) {
			return response.json()
		} else {
			return Promise.reject(response);
		}
	})
	.then(json => {
		var rawParkData = json.data;
		var filteredParks=[];
		// combines parks from all activities and filter down to user-selected states
		for (var numActivity=0; numActivity<rawParkData.length; numActivity++) {
			var filteredParksForActivity = rawParkData[numActivity].parks.filter( park => {
				var parkStates = park.states.split(",");
				for (var numState=0; numState<parkStates.length; numState++) {
					if (states) {
						if (states.includes(parkStates[numState])) {
							return true
						}
					} else {return true} // if no states selected, include all
				}
			})
			// combine all the park data from each activity together
			filteredParks.push(...filteredParksForActivity);
		}
		// filter out duplicate parks
		filteredParks = filteredParks.filter((park,index) => {
			return filteredParks.indexOf(park) === index;
		})
		// construct list of park codes
		let parkCodes="";
		for (let i=0;i<filteredParks.length;i++){
			parkCodes = parkCodes + filteredParks[i].parkCode + ",";
		}
		parkCodes = parkCodes.substring(0, parkCodes.length - 1);
		return parkCodes;
	})
	.catch(err => {
		console.log(err)
		return {error: "err"};
	}); 
}


// construct api url to find parks that meet given criteria
// PARAMETERS:
//				start (REQ): the number of the returned result to start at
//				limit (REQ): the maximum number of parks to return
//				parkCode (OPT): codes of parks to return
//				stateCode (OPT): the codes of states to search over
//				q (OPT): string search term to perform
npsApiObj.constructApiUrl = function (start,limit,parkCode,stateCode,q){
	let parkApiUrl = `https://developer.nps.gov/api/v1/parks?api_key=pXaQtxZnESvFy2yxzAgjfSRTkA4ZhxZ5QbjTUmpN`;
	parkApiUrl = parkApiUrl + npsApiObj.constructUrlParams(start,limit,parkCode,stateCode,q);
	return parkApiUrl
}

npsApiObj.constructUrlParams = function(start,limit,parkCode,stateCode,q) {
	let urlParams = "";
	urlParams = parkCode ? urlParams + `&parkCode=${parkCode}` : urlParams;
	urlParams = stateCode ? urlParams + `&stateCode=${stateCode}` : urlParams;
	urlParams = q ? urlParams + `&q=${q}` : urlParams;
	urlParams = start ? urlParams + `&start=${start}` : urlParams;
	urlParams = limit ? urlParams + `&limit=${limit}` : urlParams;
	return urlParams;
}

npsApiObj.getUrlParams = function (req, res,next){
  	var queryObject = url.parse(req.url,true).query;
	res.locals.activityId =queryObject.activityId;
	res.locals.stateCode=queryObject.stateCode;
	res.locals.parkCode=queryObject.parkCode;
	res.locals.activities=queryObject.activities;
	res.locals.q=queryObject.q;
	res.locals.start =queryObject.start;
	res.locals.limit =queryObject.limit;
	res.locals.apiUrl=queryObject.apiUrl;
	return next();
};

module.exports = npsApiObj;
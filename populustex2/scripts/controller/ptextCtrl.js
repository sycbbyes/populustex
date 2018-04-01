TexApp.controller('DataController', ['$scope','$http',
    function($scope){

    //init display content
    $scope.view={
        topMenuList:[],
        leftMenuList:[],
        contentList:{},
        displayContent:{},
        message:[],
        button:[],
        teststyle:'btn btn-primary inline',
        testvar:'test'
    };

    var rootDir = 'java_version/';
    //init menu change var
    $scope.flagMenuItemChanged = 0;

    //init data
    // 1. language button
    $scope.btnLanguage = [
        {key:'ENG', value:'ENG',picUrl:rootDir+'img/home/en.gif'},
        {key:'ESP', value:'ESP',picUrl:rootDir+'img/home/esp.gif'}
    ];
    // 2. left menu
    $scope.leftMenuList =[
        {key:'ENG', value: [
                {key: 'm.01', value: {name:"HOME", grade:"1", items:[]}},
                //{key: 'm.02', value: {name:"ABOUT US", grade:"1", items:[]}},
                // {key: 'm.03', value: {name:"PRODUCTS", grade:"1", items:[]}},
                {key: 'm.04', value: {name:"1.Bamboo Products", grade:"2", items:[
                                        {key:"m.04.01", name:"1.BAMBOO FIBER", grade:"2"},
                                        {key:"m.04.02", name:"2.BAMBOO TOP", grade:"2"},
                                        {key:"m.04.03", name:"3.BAMBOO YARN", grade:"2"},
                                        {key:"m.04.04", name:"4.BAMBOO FABRIC", grade:"2"},
                                        {key:"m.04.05", name:"5.BAMBOO FILAMENT", grade:"2"}
                                    ]}
                },
                {key: 'm.05', value: {name:"2.Viscose Products", grade:"2", items:[
                                        {key:"m.05.01", name:"1.VISCOSE FIBER", grade:"2"},
                                        {key:"m.05.02", name:"2.HEMP VISCOSE FIBER", grade:"2"},
                                        {key:"m.05.03", name:"3.VISCOSE TOW", grade:"2"},
                                        {key:"m.05.04", name:"4.VISCOSE TOP", grade:"2"},
                                        {key:"m.05.05", name:"5.VISCOSE YARN", grade:"2"}
                                    ]}
                },
                {key: 'm.06', value: {name:"3.Lyocell Products", grade:"2", items:[
                                        {key:"m.06.01", name:"1.LYOCELL BAMBOO FIBER", grade:"2"},
                                        {key:"m.06.02", name:"2.LYOCELL BAMBOO YARN", grade:"2"},
                                        {key:"m.06.03", name:"3.LYOCELL BAMBOO FABRIC", grade:"2"}
                                    ]}
                },
                {key: 'm.07', value: {name:"4.PVA Products", grade:"2", items:[
                                        {key:"m.07.01", name:"1.PVA FIBER", grade:"2"},
                                        {key:"m.07.02", name:"2.PVA YARN", grade:"2"}
                                    ]}
                },
                //{key: 'm.08', value: {name:"CO-PRODUCTS FROM PAKISTAN", grade:"1", items:[]}},
                //{key: 'm.09', value: {name:"CO-PRODUCTS FROM INDIA", grade:"1", items:[]}},
                {key: 'm.10', value: {name:"KNOWLEDGE CENTER", grade:"1", items:[]}},
                {key: 'm.11', value: {name:"CONTACT US", grade:"1", items:[]}},
                {key: 'm.02', value: {name:"ABOUT US", grade:"1", items:[]}},
                //{key: 'm.03', value: {name:"PRODUCTS", grade:"1", items:[]}}
            ]
        },
        {key:'ESP', value: [
                {key: 'm.01', value: {name:"HOME", grade:"1", items:[]}},
                //{key: 'm.02', value: {name:"ABOUT US", grade:"1", items:[]}},
                //{key: 'm.03', value: {name:"PRODUCTS", grade:"1", items:[]}},
                {key: 'm.04', value: {name:"A.BAMBOO PRODUCTS", grade:"1", items:[
                                        {key:"m.04.01", name:"1.BAMBOO FIBERkey:", grade:"2"},
                                        {key:"m.04.02", name:"2.BAMBOO TOP", grade:"2"},
                                        {key:"m.04.03", name:"3.BAMBOO YARN", grade:"2"},
                                        {key:"m.04.04", name:"4.BAMBOO FABRIC", grade:"2"},
                                        {key:"m.04.05", name:"5.BAMBOO FILAMENT", grade:"2"}
                                    ]}
                },
                {key: 'm.05', value: {name:"B.VISCOSE PRODUCTS", grade:"1", items:[
                                        {key:"m.05.01", name:"1.VISCOSE FIBER", grade:"2"},
                                        {key:"m.05.02", name:"2.HEMP VISCOSE FIBER", grade:"2"},
                                        {key:"m.05.03", name:"3.VISCOSE TOW", grade:"2"},
                                        {key:"m.05.04", name:"4.VISCOSE TOP", grade:"2"},
                                        {key:"m.05.05", name:"5.VISCOSE YARN", grade:"2"}
                                    ]}
                },
                {key: 'm.06', value: {name:"C.LYOCELL BAMBOO PRODUCTS", grade:"1", items:[
                                        {key:"m.06.01", name:"1.LYOCELL BAMBOO FIBER", grade:"2"},
                                        {key:"m.06.02", name:"2.LYOCELL BAMBOO YARN", grade:"2"},
                                        {key:"m.06.03", name:"3.LYOCELL BAMBOO FABRIC", grade:"2"}
                                    ]}
                },
                {key: 'm.07', value: {name:"D.PVA PRODUCTS", grade:"1", items:[
                                        {key:"m.07.01", name:"1.PVA FIBER", grade:"2"},
                                        {key:"m.07.02", name:"2.PVA YARN", grade:"2"}
                                    ]}
                },
                //{key: 'm.08', value: {name:"CO-PRODUCTS FROM PAKISTAN", grade:"1", items:[]}},
                //{key: 'm.09', value: {name:"CO-PRODUCTS FROM INDIA", grade:"1", items:[]}},
                {key: 'm.10', value: {name:"KNOWLEDGE CENTER", grade:"1", items:[]}},
                {key: 'm.11', value: {name:"CONTACT US", grade:"1", items:[]}},
                {key: 'm.02', value: {name:"ABOUT US", grade:"1", items:[]}},
                //{key: 'm.03', value: {name:"PRODUCTS", grade:"1", items:[]}}
            ]
        }
    ];
    // 3. top menu
    $scope.topMenuList = [
        {key:'ENG', value: [
            {key: 'm.01', value: {name:"HOME", grade:"1"}},
            {key: 'm.02', value: {name:"ABOUT US", grade:"1"}},
            {key: 'm.03', value: {name:"PRODUCTS", grade:"1"}},
            //{key: 'm.08', value: {name:"CO-PRODUCTS FROM PAKISTAN", grade:"1"}},
            //{key: 'm.09', value: {name:"CO-PRODUCTS FROM INDIA", grade:"1"}},
            {key: 'm.11', value: {name:"CONTACT US", grade:"1"}}
            ]
        },
        {key:'ESP', value: [
            {key: 'm.01', value: {name:"HOME", grade:"1"}},
            {key: 'm.02', value: {name:"ABOUT US", grade:"1"}},
            {key: 'm.03', value: {name:"PRODUCTS", grade:"1"}},
            //{key: 'm.08', value: {name:"CO-PRODUCTS FROM PAKISTAN", grade:"1"}},
            //{key: 'm.09', value: {name:"CO-PRODUCTS FROM INDIA", grade:"1"}},
            {key: 'm.11', value: {name:"CONTACT US", grade:"1"}}
        ]
        }
    ];
    // 4. right content
    $scope.contentList =[
        {key:'ENG', value: [
            {key:"m.01", name:"Home:", grade:"2", cssStyle:'width: 718px; height: 540px;',
                main:{
                    pics:[
                        {url:rootDir+'img/home/bamboo_procts.jpg',name:'CHINA POPULUS TEXTILE LIMITED',cssStyle:'width: 646px; height: 540px;'},
                        {url:rootDir+'img/bamboo_fiber/main1.jpg',name:'CHINA POPULUS TEXTILE LIMITED',cssStyle:'width: 646px; height: 540px;'}
                    ],
                    desc:[
                        {id:'1',desc:'Bamboo fiber, top and bamboo yarn'},
                        {id:'2',desc:'Viscose fiber, tow, viscose yarn and hemp viscose fiber'},
                        {id:'3',desc:'Lyocell bamboo fiber and Lyocell bamboo yarn'},
                        {id:'4',desc:'Pakistan cotton yarn, acrylic yarn, flax yarn, nylon yarn.and organic cotton yarn.'}
                    ]
                },
                detail:{
                    picStyle:'width:100px;height:100px',
                    pics:[
                        {url:rootDir+'img/certificate/cer01.jpg',name:''},
                        {url:rootDir+'img/certificate/cer02.jpg',name:''},
                        {url:rootDir+'img/certificate/cer03.jpg',name:''},
                        {url:rootDir+'img/certificate/cer04.jpg',name:''},
                        {url:rootDir+'img/certificate/cer05.jpg',name:''}
                    ],
                    desc:[
                        {head:'NEWS',desc:'Feb./16/2012	         Pakistani Textile Market Report ',link:''}
                    ],
                    tables:{head:[{}],data:[{}]}
                }
            },
            {key:"m.02", name:"About Us", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/about us.jpg.jpg',name:'CHINA POPULUS TEXTILE LIMITED',cssStyle:'width: 846px; height: 340px;'}
                    ],
                    desc:[
                        {id:'1',desc:'CHINA POPULUS TEXTILE LIMITED'},
                        {id:'2',desc:'   '},
                        {id:'3',desc:'The leading company of textile supplier.'},
                        {id:'4',desc:'Focuses on green, natural, environment friendly and spinning easily raw white materials.'},
                        {id:'5',desc:'From 2009, we co-worked with our Pakistan partners on cotton/acrylic/flax/nylon/organic cotton/viscose yarn.'},
                        {id:'6',desc:'From 2012, we are providing the special Characteristics of Lyocell bamboo fiber.'},
                        {id:'7',desc:'We provide the best services to our cooperative partners from Asia, Europe, Africa and America.'},
                        {id:'8',desc:'All inquiries can be replied within 24hours.'}
                    ]
                },
                detail:{pics:[{url:'',name:''}
                ],
                    desc:[{id:'',desc:''}
                    ],
                    tables:{head:[{}],data:[{}]}
                }
            },
            {key:"m.03", name:"Product:", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                pics:[
                    {url:rootDir+'img/home/bamboo_procts.jpg',name:'CHINA POPULUS TEXTILE LIMITED',cssStyle:'width: 846px; height: 340px;'},
                    {url:rootDir+'img/bamboo_fiber/main1.jpg',name:'CHINA POPULUS TEXTILE LIMITED',cssStyle:'width: 846px; height: 340px;'}
                ],
                desc:[
                    {id:'1',desc:'Bamboo fiber, top and bamboo yarn'},
                    {id:'2',desc:'Viscose fiber, tow, viscose yarn and hemp viscose fiber'},
                    {id:'3',desc:'Lyocell bamboo fiber and Lyocell bamboo yarn'},
                    {id:'4',desc:'Pakistan cotton yarn, acrylic yarn, flax yarn, nylon yarn.and organic cotton yarn.'}
                ]
             },
                detail:{
                picStyle:'width:100px;height:100px',
                pics:[
                    {url:rootDir+'img/certificate/cer01.jpg',name:''},
                    {url:rootDir+'img/certificate/cer02.jpg',name:''},
                    {url:rootDir+'img/certificate/cer03.jpg',name:''},
                    {url:rootDir+'img/certificate/cer04.jpg',name:''},
                    {url:rootDir+'img/certificate/cer05.jpg',name:''}
                ],
                desc:[
                    {head:'NEWS',desc:'Feb./16/2012	         Pakistani Textile Market Report ',link:''}
                ],
                tables:{head:[{}],data:[{}]}
                }
            },
            {key:"m.04", name:"BAMBOO PRODUCT", grade:"1", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:'img/bamboo/fabric.jpg',name:'bamboo fabric',cssStyle:'width: 846px; height: 340px;'},
                        {url:'img/bamboo/top3.jpg',name:'bamboo top',cssStyle:'width: 846px; height: 340px;'},
                        {url:'img/bamboo/yarn1.jpg',name:'bamboo yarn',cssStyle:'width: 846px; height: 340px;'}
                    ],
                    desc:[
                        {id:'1',desc:'BAMBOO FIBE: '},
                        {id:'2',desc:'BAMBOO TOP: '},
                        {id:'3',desc:'BAMBOO YARN: '}
                    ]
                },
                detail:{
                    picStyle:'width:100px;height:100px',
                    pics:[
                        {url:rootDir+'img/bamboo_fiber/1.jpg',name:''},
                        {url:rootDir+'img/bamboo_yarn/1.jpg',name:''}
                    ],
                    desc:[
                        {id:'',desc:''}
                    ],
                    tables:{
                        title:' ',
                        head:[
                        ],
                        data:[
                        ],
                        desc:[
                            {id:'01',desc:''}
                        ]
                    }
                }
            },
            {key:"m.04.01", name:"1.BAMBOO FIBER", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/bamboo_fiber/main1.jpg',name:'about us pic',cssStyle:'width: 718px; height: 340px;'}
                    ],
                    desc:[{id:'1',desc:'BAMBOO FIBER:'}
                            ]
                    },
                detail:{
                    pics:[
                        {url:rootDir+'img/bamboo_fiber/1.jpg',name:''},
                        {url:rootDir+'img/bamboo_fiber/2.jpg',name:''},
                        {url:rootDir+'img/bamboo_fiber/3.jpg',name:''},
                        {url:rootDir+'img/bamboo_fiber/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'100% bamboo fiber'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Natural Antibacterial, Anti-UV.'},
                        {id:'05',desc:'2. Hygroscopic with higher capacity of water absorption.'},
                        {id:'06',desc:'3. Permeable.'},
                        {id:'07',desc:'4. Smooth.'},
                        {id:'08',desc:'5. Soft.'},
                        {id:'09',desc:'6. Friendly environment, it can be completely biodegraded in soil by microorganism and sunshine.'},
                        {id:'10',desc:'7. Solo production process:'},
                        {id:'11',desc:'   Bamboo chips---> Cutting-material--->washing-material ---> Bamboo cellulose---> Fiber production--->Bamboo fiber'}
                    ],
                    tables:[
                        {
                            title:'Titer / Cut Length table',
                            head:['Titer (dtex)','Cut Length (mm)'],
                            data:[
                                {value1:["1.33","38"]},
                                {value1:["1.56","38"]},
                                {value1:["3.33","88"]},
                                {value1:["5.56","51"]}
                            ],
                            desc:[
                                {id:'01',desc:''}
                            ]
                        }
                    ]
                }
            },
            {key:"m.04.02", name:"2.BAMBOO TOP", grade:"2",cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/bamboo_top/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[{id:'1',desc:'BAMBOO TOP:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/bamboo_top/1.jpg',name:''},
                        //{url:rootDir+'img/bamboo_top/2.jpg',name:''},
                        //{url:rootDir+'img/bamboo_top/3.jpg',name:''},
                        //{url:rootDir+'img/bamboo_top/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'100% bamboo top'},
                        {id:'01',desc:'Bamboo fiber top are used for wool type spinning. Its downstream products can be applied for suiting clothes, trousers, decorating articles etc. Bamboo fiber top was 100% made from bamboo through high-tech process. It can be completely biodegraded in soil by micro-organism and sunshine. The decomposition process does not cause any pollution to the environment. Bamboo fiber top it can be mixed spinning with wool, tencel, silk etc.'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Natural Antibacterial.'},
                        {id:'05',desc:'2. Hygroscopic.'},
                        {id:'06',desc:'3. Permeable.'},
                        {id:'07',desc:'4. Smooth.'},
                        {id:'08',desc:'5. Soft.'},
                    ],
                    tables:[
                        {
                            title:'Specification: Titer / Cut Length ',
                            head:['Titer (dtex)','Cut Length (mm)'],
                            data:[
                                {value1:["3.33","86"]}
                            ],
                            desc:[
                                {id:'01',desc:''}
                            ]
                        },
                        {
                            title:'Bamboo Top Quality Inspection Report: ',
                            head:[' ',' '],
                            data:[
                                {value1:['SPECIFICATION','3D*86MM']},
                                {value1:['Average length','86mm']},
                                {value1:['Standard weight','21']},
                                {value1:['Moisture regain %','10.9']},
                                {value1:['Average weight (m/g)','20.9']},
                                {value1:['Weight unevenness %','0.95']},
                                {value1:['Coefficient of dispersion','20.3']},
                                {value1:['Staple under 30mm','0.83']},
                                {value1:['Ranges(+ -)','0']},
                                {value1:['Mean-square deviation','17.6']},
                                {value1:['Nub/g','0']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'Trouser'},
                                {id:'01',desc:'Suiting fabrics'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.04.03", name:"3.BAMBOO YARN", grade:"2",cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/bamboo_yarn/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[{id:'1',desc:'BAMBOO YARN:'}
                    ]
                },
                detail:{
                    pics:[
                        {url:rootDir+'img/bamboo_yarn/1.jpg',name:''}
                        //,{url:rootDir+'img/bamboo_top/2.jpg',name:''}
                        //,{url:rootDir+'img/bamboo_top/3.jpg',name:''}
                        //,{url:rootDir+'img/bamboo_top/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'Bamboo yarn in raw white and dyed bamboo yarn. We can produce any color and any blended yarns as your requirement.'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Natural Antibacterial, Anti-UV.'},
                        {id:'05',desc:'2. Hygroscopic with higher capacity of water absorption.'},
                        {id:'06',desc:'3. Permeable.'},
                        {id:'07',desc:'4. Smooth.'},
                        {id:'08',desc:'5. Soft.'},
                        {id:'08',desc:'5. Friendly environment, it can be completely biodegraded in soil by microorganism and sunshine..'},
                        {id:'08',desc:'5. Easy for dyeing and spinning.'}
                    ],
                    tables:[
                        {
                            title:'Specification: ',
                            head:['{Description','Count Range (Ne)'],
                            data:[
                                {value1:["100% bamboo yarn","10-60"]},
                                {value1:["Bamboo/cotton yarn","10-60"]}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:' '},
                                {id:'01',desc:'Bandages'},
                                {id:'01',desc:'Masks'},
                                {id:'01',desc:'Surgical clothes'},
                                {id:'01',desc:'Intimate apparel'},
                                {id:'01',desc:'Socks'},
                                {id:'01',desc:'Bed linen'},
                                {id:'01',desc:'Towels'},
                                {id:'01',desc:'Bath suits'},
                                {id:'01',desc:'Mats'},
                                {id:'01',desc:'Blankets'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.04.04", name:"4.BAMBOO FABRIC", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/bamboo_fabric/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 340px;'}
                    ],
                    desc:[{id:'1',desc:'BAMBOO FABRIC:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/bamboo_fiber/1.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/2.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/3.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'Bamboo fiber fabric is natural and environment-friendly fabrics, has soft hand feeling, good ventilation, good sense of drape pendency. This product suitable for shirts and skirts, all kinds of fashion, suitable for summer wear, apply to bedding.'},
                        {id:'02',desc:'Bamboo fabric is a natural textile made from the pulp of the bamboo grass. Bamboo fabric has been growing in popularity because it has many unique properties and is more sustainable than most textile fibers. Bamboo fabric is light and strong, has excellent wicking properties, and is to some extent antibacterial. The use of bamboo fiber for clothing was a 20th century development, pioneered by Chinese.'},
                        {id:'03',desc:'Bamboo fabric is very soft and can be worn directly next to the skin. The fiber is naturally smooth and round without treatment, meaning that there are no sharp to irritate the skin.:'},
                        {id:'04',desc:'Bamboo is highly water absorbent, able to take up three times its weight in water. In bamboo fabric, this translates to an excellent wicking ability that will pull moisture away from the skin so that it can evaporate. For this reason, clothing made of bamboo fiber is often worn next to the skin.'},
                        {id:'05',desc:'Bamboo also has many antibacterial qualities, which bamboo fabric is apparently able to retain, even through multiple washings. This helps to reduce bacteria that thrive on clothing and cause unpleasant odors. It can also kill odor causing bacteria that live on human skin, making the wearer and his or her clothing smell sweeter. In addition, bamboo fabric has insulating properties and will keep the wearer cooler in summer and warmer in winter. The versatility of bamboo fabric makes it an excellent choice for clothing designers exploring alternative textiles, and in addition, the fabric is able to take bright dye colors well, drape smoothly, and star in a variety of roles from knit shirts to woven skirts.'},
                        {id:'06',desc:'We can customize any specs as per your requirement. Welcome to your own specs, we will make according to your request. If you have any question, pls feel free to contact us info@populustex.com'},
                     ],
                    tables:[
                        {
                            title:'1) . Bamboo Knitted Fabric',
                            head:['MODAL NO.','MATERIAL','WIDTH','WEIGHT (GSM)','TYPE'],
                            data:[
                                {value1:['PT-BKF-12010','100% bamboo','155cm','260','single jersey']},
                                {value1:['PT-BKF-12013','70% bamboo,30% cotton','160cm','170','single jersey']},
                                {value1:['PT-BKF-12015','100% bamboo','160cm','175','single jersey']},
                                {value1:['PT-BKF-12019','100% bamboo','192cm','146','single jersey']},
                                {value1:['PT-BKF-12021','70% bamboo,30% cotton','155cm','200','single jersey']},
                                {value1:['PT-BKF-12026','100% bamboo','163cm','197','single jersey']},
                                {value1:['PT-BKF-12028','100% bamboo','155cm','140','single jersey']},
                                {value1:['PT-BKF-12033','95% bamboo, 5% spandex','155cm','200','single jersey']},
                                {value1:['PT-BKF-12035','100% bamboo','160cm','180-190','single jersey']},
                                {value1:['PT-BKF-12041','70% bamboo,30% cotton','160cm','205','rib 1x1']},
                                {value1:['PT-BKF-12045','70% bamboo,30% organic cotton','168cm','280','rib 2x2']},
                                {value1:['PT-BKF-12049','67%bamboo/27%cotton/6%spandex','145cm','340','french terry']},
                                {value1:['PT-BKF-12052','70% bamboo,30% cotton','90/91"','230','pique']},
                                {value1:['PT-BKF-12056','70% bamboo,30% organic cotton','150cm','420','terry']},
                                {value1:['PT-BKF-12057','70% bamboo,30% organic cotton','150cm','220','terry']},
                                {value1:['PT-BKF-12058','70% bamboo,30% organic cotton','150cm','340','terry']},
                                {value1:['PT-BKF-12059','70% bamboo,30% organic cotton','150cm','370','terry']},
                                {value1:['PT-BKF-12060','70% bamboo,30% organic cotton','150cm','410','terry']},
                                {value1:['PT-BKF-12061','70% bamboo,30% organic cotton','150cm','500','terry']},
                                {value1:['PT-BKF-12062','70% bamboo,30% organic cotton','150cm','550','terry']},
                                {value1:['PT-BKF-12066','70% bamboo,30% cotton','78"','250','interlock']},
                                {value1:['PT-BKF-12072','100% bamboo','150cm','430','fleece']},
                                {value1:['PT-BKF-12081','70%bamboo 20%cotton 10%polyester','170cm','300','velour']}
                            ],
                            desc:[
                                {id:'01',desc:''}
                            ]
                        },
                        {
                            title:'2). Bamboo Woven Fabric',
                            head:['MODAL NO.','MATERIAL','SPECIFICATION','WIDTH','WEIGHT (GSM)','STYLE'],
                            data:[
                                {value1:['PT-BWF-11010','100% bamboo','30*30 76*69','57/58"','115','plain']},
                                {value1:['PT-BWF-11015','100% bamboo','30*30 76*69','62/63"','112','plain']},
                                {value1:['PT-BWF-11016','100% bamboo','20*20 108*58','57/58"','195','twill 3/1']},
                                {value1:['PT-BWF-11023','100% bamboo','21*21 108*58','57/58"','184','twill 2/1']},
                                {value1:['PT-BWF-11025','70% bamboo,30% cotton','30*30 133*70','57/58"','158','twill 2/1']},
                                {value1:['PT-BWF-11028','100% bamboo','30*30 110*70','57/58"','140','plain']},
                                {value1:['PT-BWF-11035','100% bamboo','32*21 92*60','57/58"','135','plain']},
                                {value1:['PT-BWF-11038','70% bamboo,30% cotton','32*32 133*78','57/58"','153','plain']},
                                {value1:['PT-BWF-11041','100% bamboo','32*32 133*86','57/58"','159','plain']},
                                {value1:['PT-BWF-11046','50% bamboo,50% cotton','35*35 91*68','59/60"','106','plain']},
                                {value1:['PT-BWF-11052','100% bamboo','40*40 133*100','59/60"','136','plain']},
                                {value1:['PT-BWF-11056','100% bamboo','40*40 96*74','64/65"','99','plain']},
                                {value1:['PT-BWF-11058','100% bamboo','40*40 96*74','66/67"','99','plain']},
                                {value1:['PT-BWF-11063','100% bamboo','40*40 128*86','59/60"','125','twill 2/1']},
                                {value1:['PT-BWF-11070','70% bamboo,30% cotton','40*40 133*72','66/67"','120','twill 2/1']},
                                {value1:['PT-BWF-11075','100% bamboo','40*40 50*50','57/58"','58','plain']},
                                {value1:['PT-BWF-11082','70% bamboo,30% cotton','40*40 96*96','62/63"','112','plain']}
                            ],
                            desc:[
                                {id:'01',desc:''}
                            ]
                        }
                    ]
                }
            },
            {key:"m.04.05", name:"5.BAMBOO FILAMENT", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/bamboo_filament/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[{id:'1',desc:'BAMBOO FILAMENT:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/bamboo_fiber/1.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/2.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/3.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'Bamboo filament has properties of soft hand and good hygroscopic and ventilator, cool and bright luster, it has a good wearability and natural antibiotic and bacteriostasis for colon bacillus and golden staphylococcus. Bamboo filament which looks like silk with soft and smooth. Bamboo filament has low cost, better antibacterial and water absorption.'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Anti-bacterial and anti-fungal.'},
                        {id:'05',desc:'2. Breathable and dry property.'},
                        {id:'06',desc:'3. Thermal regulation.'},
                        {id:'07',desc:'4. Shine color.'},
                        {id:'08',desc:'5. Soft.'}
                    ],
                    tables:[
                        {
                            title:'list',
                            head:['***D/**F'],
                            data:[
                                {value1:["75D/18F"]},
                                {value1:["75D/36F"]},
                                {value1:["120D/30F"]},
                                {value1:["150D/30F"]},
                                {value1:["300D/60F"]}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'Night-suit'},
                                {id:'01',desc:'underwear'},
                                {id:'01',desc:'T-shirt'},
                                {id:'01',desc:'swimsuit'},
                                {id:'01',desc:'national costume...s'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.05.01", name:"1.VISCOSE FIBER", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/viscose_fiber/main1.jpg',name:'about us pic',cssStyle:'width: 718px; height: 340px;'}
                    ],
                    desc:[{id:'1',desc:'VISCOSE FIBER:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/bamboo_fiber/1.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/2.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/3.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'The viscose fibers are mainly use to produce viscose yarns and non woven fabrics..'},
                        {id:'02',desc:'The popular goods we are producing are 1.56Dtex X 38mm and 1.33Dtex X 38mm in raw white. Of the 12 major textile fiber, viscose fiber moisture content and the most human skin physiology, not only smooth and cool, breathable, antistatic, stain bright features, and has excellent drape and silk-like luster, high heat and light stability, strength and depth to meet the needs of the overwhelming majority of prime textiles. Because good moisture absorption, comfort, excellent spinnability, drape well, often with cotton, wool, or various synthetic fibers, spinning pay for various types of clothing and decorative textiles.'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Silk-like luster.'},
                        {id:'05',desc:'2. Good moisture absorption.'},
                        {id:'06',desc:'3. Excellent spinnability.'}
                    ],
                    tables:[
                        {
                            title:'PARA list',
                            head:['iter (dtex)','Cut Length (mm)'],
                            data:[
                                {value1:["1.33",'38']},
                                {value1:["1,56",'38']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'women fashion garment'},
                                {id:'01',desc:'skirt'},
                                {id:'01',desc:'evening wear'},
                                {id:'01',desc:'suit'},
                                {id:'01',desc:'sheetings'},
                                {id:'01',desc:'sheetings'},
                                {id:'01',desc:'tablecloths...s'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.05.02", name:"2.HEMP VISCOSE FIBER", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/hemp_viscose_fiber/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[{id:'1',desc:'HEMP VISCOSE FIBER:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/bamboo_fiber/1.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/2.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/3.jpg',name:''},
                        //{url:rootDir+'img/bamboo_fiber/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'01',desc:'100%hemp viscose fiber'},
                        {id:'01',desc:'Hemp Viscose Fiber is a new type of regenerated cellulose fiber developed by patent technology. Hemp fiber has its special characteristics, which is healthy, fashional, green and eco-friendly.'},
                        {id:'02',desc:'The test has proved it has a strong durability, stability, tenacity, antibacterial and breathable. And the thinness and whiteness degree of hemp fiber is similar to classic viscose.'},
                        {id:'02',desc:'Hemp viscose fiber has widely used in textile industry. The fabrics made by hemp viscose fiber are smooth feeling, shining in color, cool, breathable, naturally anti-bacteria.'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Natural Antibacterial'},
                        {id:'05',desc:'2. Hygroscopic.'},
                        {id:'06',desc:'3. Permeable.'},
                        {id:'06',desc:'3. Smooth.'},
                        {id:'06',desc:'3. Soft.'}
                    ],
                    tables:[
                        {
                            title:'SPECIFICATION:',
                            head:['iter (dtex)','Cut Length (mm)'],
                            data:[
                                {value1:["1.67",'38']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'women fashion garment'},
                                {id:'01',desc:'skirt'},
                                {id:'01',desc:'evening wear'},
                                {id:'01',desc:'suit'},
                                {id:'01',desc:'home textile'},
                                {id:'01',desc:'napkins'},
                                {id:'01',desc:'sheetings...s'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.05.03", name:"3.VISCOSE TOW", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/viscose_tow/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[{id:'1',desc:'VISCOSE TOW:'}
                    ]
                },
                detail:{
                    pics:[
                        {url:rootDir+'img/viscose_tow/1.jpg',name:''},
                        {url:rootDir+'img/viscose_tow/2.jpg',name:''},
                        {url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        {url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:'Feature:'},
                        {id:'04',desc:'1. Anti-Distortion'},
                        {id:'05',desc:'2. Anti-Pilling.'},
                        {id:'06',desc:'3. Abrasion-Resistant.'},
                        {id:'06',desc:'4. Heat-resistant.'},
                        {id:'06',desc:'3. Variety: Bright/Dull.'}
                    ],
                    tables:[
                        {
                            title:'SPECIFICATION:',
                            head:[],
                            data:[
                                {value1:["1.0D",'1.5D','2.5D','3.0D']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.05.04", name:"4.VISCOSE TOP", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/viscose_top/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[{id:'1',desc:'VISCOSE TOP:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/viscose_tow/1.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/2.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:'100% viscose top'},
                        {id:'04',desc:'Viscose fiber tops are the very popular tops in textiles. Viscose fiber tops are made from the materials viscose fiber 3.33dtexx88mm. Viscose tops are used for wool type spinning. Its downstream products can be applied for suiting clothes, carpets, trousers, decorating articles etc. Viscose fiber tops can be mixed spinning with wool, tencel, silk and many other textile materials. Viscose fiber tops are soft, not only smooth and cool, breathable, antistatic, stain bright features, but also has excellent drape and silk-like luster, high heat and light stability, strength and depth to meet the needs of the overwhelming majority of prime textiles.'}
                    ],
                    tables:[
                        {
                            title:'SPECIFICATION:',
                            head:[],
                            data:[
                                {value1:['3.33dtexx88mm']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.05.05", name:"5.VISCOSE YARN", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/viscose_yarn/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[
                        {id:'01',desc:'VISCOSE YARN:'},
                        {id:'03',desc:'Viscose yarn unlike most man-made fibers viscose is not synthetic. It is mad from wood pulp, a naturally occurring cellulose fiber.'},
                        {id:'03',desc:'Viscose has many of the qualities of cotton. It is strong, extremely absorbent, comes in a variety of qualities and weights,and can be made t o resemble natural fabrics. With Viscose fiber we can offer:'},
                        {id:'03',desc:'Knitting yarns,'},
                        {id:'03',desc:'Weaving yarns.'}
                    ]
                },
                detail:{
                    pics:[
                        {url:rootDir+'img/viscose_yarn/1.jpg',name:''},
                        {url:rootDir+'img/viscose_yarn/2.jpg',name:''}
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:' '},
                        {id:'03',desc:'Characteristics:'},
                        {id:'03',desc:'Reduced surface hairiness. Extremely reduced pilling. Dimensional stability. Reduced Twist tendency on fabrics. More uniform fabric cover in comparison with a conventional ringspun yarn. Fabrics evenness. Optimization of compactness on stretch fabrics. Reduced risk of deterioration of the yarn during finishing, Easy-care: machine-washable fabrics with reduced pilling tendency. Even after several washed fabrics structure look neat and defined.'},
                        {id:'03',desc:' '},
                        {id:'03',desc:'Count rang :'},
                        {id:'04',desc:'From Ne24 to Ne 60 Available also in S and Z twist and blended with Blends:'},
                        {id:'03',desc:'100% Viscose'},
                        {id:'03',desc:'Viscose/Cotton'},
                        {id:'03',desc:'Viscose/Acrylic'}
                    ],
                    tables:[
                        {
                            title:'SPECIFICATION:',
                            head:[],
                            data:[
                                //{value1:['3.33dtexx88mm']}
                            ],
                            desc:[
                                //{id:'01',desc:'APPLICATION:'},
                                //{id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.06.01", name:"1.LYOCELL BAMBOO FIBER", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/lyocell_bamboo_fiber/main1.jpg',name:'about us pic',cssStyle:'width: 718px; height: 340px;'}
                    ],
                    desc:[
                        {id:'01',desc:'LYOCELL BAMBOO FIBER:'},
                        {id:'03',desc:'LYOCELL BAMBOO FIBER is Solvent Humidity Modulus bamboo fiber. The production of Lyocell bamboo fiber is 0 Chemical reactions, 0 water wastes and 0 Harmful gases released into air. Therefore it is real environment-friendly green fiber.'},
                        {id:'03',desc:'The special Characteristics of Lyocell bamboo fiber are antibacterial, breathability, suitable to make high-count yarns , good spinnability, excellent dyeing properties and anti-pill. Fabrics made by Lyocell Bamboo are shape-stable and machine-washed.'},
                        {id:'01',desc:'  '},
                        {id:'01',desc:'Antibacterial Property of Lyocell Bamboo'},
                        {id:'01',desc:'Lyocell bamboo has been sent to the world authoritative fiber testing organization-SGS Shanghai to have tests. Nowadays, the fiber has passed the anti-bacterial test.'}
                    ]
                },
                detail:{
                    pics:[
                        {url:rootDir+'img/lyocell_bamboo_fiber/1.jpg',name:''},
                        {url:rootDir+'img/lyocell_bamboo_fiber/2.jpg',name:''}
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:' '},
                        {id:'03',desc:'Characteristics:'},
                        {id:'03',desc:'Reduced surface hairiness. Extremely reduced pilling. Dimensional stability. Reduced Twist tendency on fabrics. More uniform fabric cover in comparison with a conventional ringspun yarn. Fabrics evenness. Optimization of compactness on stretch fabrics. Reduced risk of deterioration of the yarn during finishing, Easy-care: machine-washable fabrics with reduced pilling tendency. Even after several washed fabrics structure look neat and defined.'},
                        {id:'03',desc:' '},
                        {id:'03',desc:'Count rang :'},
                        {id:'04',desc:'From Ne24 to Ne 60 Available also in S and Z twist and blended with Blends:'},
                        {id:'03',desc:'100% Viscose'},
                        {id:'03',desc:'Viscose/Cotton'},
                        {id:'03',desc:'Viscose/Acrylic'}
                    ],
                    tables:[
                        {
                            title:'Difference from lyocell bamboo and other fibers:',
                            head:['Performance Index','Lyocell Bamboo','Viscose Bamboo Fiber','Lyocell','Modal','Cotton Fiber'],
                            data:[
                                {value1:['Linear Density(dtex)','1.7','1.7','1.7','1.7','1.7']},
                                {value1:['Dry Tensile Strength(cN/dtex)','3.3-3.8','2.2','3.3-3.8','3.4-3.6','2.0-2.4']},
                                {value1:['Wet Tensile Strength(cN/dtex)','2.8-3.2','1.1','2.8-3.2','1.9-2.1','2.6-3.0']},
                                {value1:['Wet Modulus(cN/dtex)','>=14','--','18','11','10']},
                                {value1:['Residual Sulfur','--','20','--','20','--']}
                            ],
                            desc:[
                                //{id:'01',desc:'APPLICATION:'},
                                //{id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        },
                        {
                            title:'SPECIFICATION:',
                            head:['Items','Specification','Specification','Specification','Specification'],
                            data:[
                                {value1:['Cotton','1.11dtex *38mm','1.33dtex*38mm','1.56dtex*38mm','1.67dtex*38mm']},
                                {value1:['Medium and Length','2.22dtex*51mm','2.22dtex*65mm','2.78dtex*65mm','-']},
                                {value1:['Wool type','3.33dtex*65mm','3.33dtex*78mm','-','-']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'},
                                {id:'01',desc:'Garment Fabric, Bedding, Towel, Socks, Baby wear, underwear'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.06.02", name:"2.LYOCELL BAMBOO YARN", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/lyocell_bamboo_yarn/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[
                        {id:'01',desc:'LYOCELL BAMBOO YARN:'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/lyocell_bamboo_fiber/1.jpg',name:''}
                        //{url:rootDir+'img/lyocell_bamboo_fiber/2.jpg',name:''}
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:' '}
                    ],
                    tables:[
                        {
                            title:'100% Lyocell Bamboo Yarn:',
                            head:['Performance Index','Unit','100% Lyocell Bamboo Yarn'],
                            data:[
                                {value1:['Linear Density','Tex','18.8']},
                                {value1:['Single Yarn Migthtiness','cN','406']},
                                {value1:['The Single Yarn Migthtiness of The Change Coeficient','CV(%)','8']},
                                {value1:['The Single Yarn Strengthening','cN/tex','21.6']},
                                {value1:['The Weight of The Change Coefficient','CV(%)','1.4']}
                            ],
                            desc:[
                                {id:'01',desc:' '}
                            ]
                        },
                        {
                            title:'Specification:',
                            head:['Description','Count Range (Ne)'],
                            data:[
                                {value1:['100%Lyocell bamboo yarn','10-60']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'}
                                //{id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.06.03", name:"3.LYOCELL BAMBOO FABRIC", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/lyocell_bamboo_fabric/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[
                        {id:'01',desc:'LYOCELL BAMBOO FABRIC:'},
                        {id:'01',desc:'Lyocell bamboo fabric is the real environment friendly green fabric. During which there is no chemical reaction, waste water and gas, and harmful chemical residues. Lyocell bamboo fabric has high strength, high wet modulus and naturally anti-bacterial and bacteriostatic properties.'},
                        {id:'01',desc:'In the bamboo cellulose, the unique gene "BAMBOO QUINONE" has natural functions of sterilization, bacteriostatics, anti-mite and anti-odor. Lyocell Bamboo has been sent to the world authoritative fiber testing organization-SGS Shanghai to have tests. Nowadays, the fiber has passed the anti-bacterial test.'},
                        {id:'01',desc:'Lyocell Bamboo Fabric boasts a glazed surface, a smooth touch feeling, and a bright gloss.'},
                        {id:'01',desc:'Lyocell bamboo fabric are shape-stable, undeformable, and machine-washed.'},
                        {id:'01',desc:'We can customize any specs as per your requirement. Welcome to your own specs, we will make according to your request. If you have any question, pls feel free to contact us info@populustex.com.'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/lyocell_bamboo_fiber/1.jpg',name:''}
                        //{url:rootDir+'img/lyocell_bamboo_fiber/2.jpg',name:''}
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:' '}
                    ],
                    tables:[
                        {
                            title:'100% Lyocell Bamboo Yarn:',
                            head:['Performance Index','Unit','100% Lyocell Bamboo Yarn'],
                            data:[
                                {value1:['Linear Density','Tex','18.8']},
                                {value1:['Single Yarn Migthtiness','cN','406']},
                                {value1:['The Single Yarn Migthtiness of The Change Coeficient','CV(%)','8']},
                                {value1:['The Single Yarn Strengthening','cN/tex','21.6']},
                                {value1:['The Weight of The Change Coefficient','CV(%)','1.4']}
                            ],
                            desc:[
                                {id:'01',desc:' '}
                            ]
                        },
                        {
                            title:'Specification:',
                            head:['Description','Count Range (Ne)'],
                            data:[
                                {value1:['100%Lyocell bamboo yarn','10-60']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'}
                                //{id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.07.01", name:"1.PVA FIBER", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/pva_fiber/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[
                        {id:'01',desc:'PVA FIBER:'},
                        {id:'01',desc:' '},
                        {id:'01',desc:'Water-soluble polyvinyl alcohol water-soluble staple fiber is also called Water-soluble PVA short fibers.It ismade by polyvinyl alcohol as raw material,then through wet spinning, heat treatment, room temperature water, the fiber crimp oil obtained. It has good physical and mechanical properties, can be dissolved in water in a certain temperature, have a dry good thermal stability.'},
                        {id:'01',desc:'Since water-soluble PVA short fibers special properties of dissolving in water, It can be widely used as a non-woven fabrics, paper, textiles, medical supplies and other raw materials industries. Water-soluble polyvinyl alcohol fiber as raw material for textile short processed into tissue or through non-woven processing into non-woven, can be used as embroidery backing cloth, embroidered lace a variety of patterns; also be used as sanitary napkins, Children with diapers and other medical supplies, are also used for sugar beet breeding, cultivation of crops and fruit trees cover. Water-soluble PVA staple fiber in the textile spinning process of application can increase the count to improve the uniformity and sizing spun untwisted yarn.'},
                        {id:'01',desc:'  '},
                        {id:'01',desc:'Feature:'},
                        {id:'01',desc:'1. Feeling soft'},
                        {id:'01',desc:'1. Bulky effect'},
                        {id:'01',desc:'1. Warter absorbency'},
                        {id:'01',desc:'1. Light of weight'},
                        {id:'01',desc:'1. Better spinning'}
                    ]
                },
                detail:{
                    pics:[
                        {url:rootDir+'img/pva_fiber/1.jpg',name:''}
                        //{url:rootDir+'img/lyocell_bamboo_fiber/2.jpg',name:''}
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:' '}
                    ],
                    tables:[
                        {
                            title:'Specification:',
                            head:['Titer (dtex)','Cut Length (mm)'],
                            data:[
                                {value1:['1.22','38']},
                                {value1:['1.33','38']},
                                {value1:['1.56','38']}
                            ],
                            desc:[
                                {id:'01',desc:'Application: '},
                                {id:'01',desc:'pva yarns'},
                                {id:'01',desc:'pva sewing thread'},
                                {id:'01',desc:'non-woven fabric'}
                            ]
                        }

                    ]
                }
            },
            {key:"m.07.02", name:"2.PVA YARN", grade:"2", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/pva_yarn/main1.jpg',name:'about us pic',cssStyle:'width: 846px; height: 400px;'}
                    ],
                    desc:[
                        {id:'01',desc:'PVA YARN:'},
                        {id:'01',desc:'  '},
                        {id:'01',desc:'PVA yarn is Vinylon yarn. It can be divided into water soluble and non-soluble yarn. Water soluble vinylon yarn is a functional yarn developed by the Japanese in the past decade, which can be dissolved in the range of 20 degrees �C 90 degrees water. It also has many specific functions, such as systolic function within the temperature.'},
                        {id:'01',desc:'Its composition is a polyvinyl alcohol. Polyvinyl alcohol is one of the few with the biodegradability of synthetic polymer materials. It is soluble in water, tasteless, non-toxic aqueous solution was colorless and transparent, natural biological degradation in shorter period of time insoluble polyvinyl alcohol component is polyvinyl alcohol. It has good aci and alkali resistance, resistance to hot and dry performance.'},
                        {id:'01',desc:'  '},
                        {id:'01',desc:'Feature:'},
                        {id:'01',desc:'1. Environmental protection'},
                        {id:'01',desc:'1. Feeling softer'},
                        {id:'01',desc:'1. Light of weight'},
                        {id:'01',desc:'1. Improve cotton fabrics\' shortage'},
                        {id:'01',desc:'1. Increase other yarn\'s spinning count'},
                        {id:'01',desc:'1. Keep fabric smooth'}
                    ]
                },
                detail:{
                    pics:[
                        //{url:rootDir+'img/lyocell_bamboo_fiber/1.jpg',name:''}
                        //{url:rootDir+'img/lyocell_bamboo_fiber/2.jpg',name:''}
                        //{url:rootDir+'img/viscose_tow/3.jpg',name:''},
                        //{url:rootDir+'img/viscose_tow/4.jpg',name:''}
                    ],
                    desc:[
                        {id:'03',desc:' '}
                    ],
                    tables:[
                        {
                            title:'100% Lyocell Bamboo Yarn:',
                            head:['Performance Index','Unit','100% Lyocell Bamboo Yarn'],
                            data:[
                                {value1:['Linear Density','Tex','18.8']},
                                {value1:['Single Yarn Migthtiness','cN','406']},
                                {value1:['The Single Yarn Migthtiness of The Change Coeficient','CV(%)','8']},
                                {value1:['The Single Yarn Strengthening','cN/tex','21.6']},
                                {value1:['The Weight of The Change Coefficient','CV(%)','1.4']}
                            ],
                            desc:[
                                {id:'01',desc:' '}
                            ]
                        },
                        {
                            title:'Specification:',
                            head:['Description','Count Range (Ne)'],
                            data:[
                                {value1:['100%Lyocell bamboo yarn','10-60']}
                            ],
                            desc:[
                                {id:'01',desc:'APPLICATION:'}
                                //{id:'01',desc:'Flocking and Wallpaper'}
                            ]
                        }
                    ]
                }
            },
            {key:"m.10", name:"Knowledge Center", grade:"1", cssStyle:'',
                main:{
                    pics:[
                        {url:rootDir+'img/knowledge/tex_Par.gif',name:'knowledge table',cssStyle:'width: 846px; height: 340px;'}
                    ],
                    desc:[
                        {id:'01',desc:'Technology center'},
                        {id:'02',desc:'  '},
                        {id:'03',desc:'1. check the cotton price in China'},
                        {id:'04',desc:'   http://www.czce.com.cn/portal/index.htm'},
                        {id:'05',desc:'2. check RMB exchange USD rate'},
                        {id:'06',desc:'   http://www.boc.cn/sourcedb/whpj/'},
                        {id:'07',desc:'3. check HS CODE online in China'},
                        {id:'08',desc:'   http://www.customslawyer.cn/hgsz/#Menu=ChildMenu12'},
                        {id:'09',desc:'4. yarn conversion tools'},
                        //{id:'6',desc:'   http://www.boc.cn/sourcedb/whpj/'},
                        {id:'10',desc:'5. Y1arn conversion caculator'},
                        {id:'11',desc:'   http://www.uster.cn/UI/YarnCount.html 5. shipping line websites'},
                        {id:'12',desc:'   http://www.oocl.com/pakistan/eng/Pages/default.aspx'},
                        {id:'13',desc:'   http://www.rclgroup.com/'},
                        {id:'14',desc:'   http://www.hmm.co.kr/cms/business/ebiz/trackTrace/trackTrace/index.jsp'},
                        {id:'15',desc:'   http://www.coscon.com/home.screen'},
                        {id:'16',desc:'   http://www.csavnorasia.com/index_en.htm'},
                        {id:'17',desc:'6. travel to China tools'},
                        {id:'18',desc:'6.1 Book your hotel in China'},
                        {id:'19',desc:'    http://english.ctrip.com/'},
                        {id:'20',desc:'6.2 check your air ticket from airline'},
                        {id:'21',desc:'    http://en.bcia.com.cn/'}
                    ]
                },
                detail:{pics:[{url:'',name:''}],
                    desc:[{id:'',desc:''}
                    ],
                    tables:{head:[{}],data:[{}]}
                }
            },
            {key:"m.11", name:"Contact Us", grade:"1", cssStyle:'width: 718px; height: 340px;',
                main:{
                    pics:[
                        {url:rootDir+'img/kefu.jpg',name:'about us pic',cssStyle:'width: 846px; height: 340px;'}
                    ],
                    desc:[
                        {id:'0',desc:'CONTACT US'},
                        {id:'0',desc:'  '},
                        {id:'0',desc:'CHINA POPULUS TEXTILE LIMITED'},
                        {id:'0',desc:'Tel: 0086-10-62717582'},
                        {id:'0',desc:'Fax: 0086-10-58850786'},
                        {id:'0',desc:'Email: info@populustex.com'},
                        {id:'0',desc:'Website:www.populustex.com'},
                        {id:'0',desc:'MSN: populustex@hotmail.com'},
                        {id:'0',desc:'Skype: populustex'}
                       ],
                    cssStyle:'font-weight: bold'
                },
                detail:{pics:[{url:'',name:''}],
                    desc:[{id:'',desc:''}
                    ],
                    tables:{head:[{}],data:[{}]}
                }
            }
        ]
        },
        {key:'ESP', value: [
            {key:"m.04.01", name:"1.BAMBOO FIBERkey:", grade:"2"},
            {key:"m.04.02", name:"2.BAMBOO TOP", grade:"2"},
            {key:"m.04.03", name:"3.BAMBOO YARN", grade:"2"},
            {key:"m.04.04", name:"4.BAMBOO FABRIC", grade:"2"},
            {key:"m.04.05", name:"5.BAMBOO FILAMENT", grade:"2"},
            {key:"m.05.01", name:"1.VISCOSE FIBER", grade:"2"},
            {key:"m.05.02", name:"2.HEMP VISCOSE FIBER", grade:"2"},
            {key:"m.05.03", name:"3.VISCOSE TOW", grade:"2"},
            {key:"m.05.04", name:"4.VISCOSE TOP", grade:"2"},
            {key:"m.05.05", name:"5.VISCOSE YARN", grade:"2"},
            {key:"m.06.01", name:"1.LYOCELL BAMBOO FIBER", grade:"2"},
            {key:"m.06.02", name:"2.LYOCELL BAMBOO YARN", grade:"2"},
            {key:"m.06.03", name:"3.LYOCELL BAMBOO FABRIC", grade:"2"},
            {key:"m.07.01", name:"1.PVA FIBER", grade:"2"},
            {key:"m.07.02", name:"2.PVA YARN", grade:"2"},
            {key:"m.11", name:"2.PVA YARN", grade:"2"}
        ]
        }
    ];

    var getDataBykey = function(list, key){
        for (var i=0; i<list.length; i++){
            if(list[i].key==key){
                return list[i].value;
            };
        };
    };
    var getItemBykey = function(list, key){
        for (var i=0; i<list.length; i++){
            if(list[i].key==key){
                return list[i];
            };
        };
    };



    //set display item
    $scope.setContentItem = function(itemKey){
        var key = itemKey;
        // if (itemKey=='m.04' || itemKey=='m.05' || itemKey=='m.06' || itemKey=='m.07' ){
        if (itemKey=='m.05' || itemKey=='m.06' || itemKey=='m.07' ){
            key = itemKey + '.01';
        };
        $scope.view.displayContent = getItemBykey($scope.view.contentList,key);
        //
        $scope.flagMenuItemChanged = 1;
        // alert($scope.flagMenuItemChanged);
    };
    $scope.setContentItem('m.01');

    //set language
    $scope.setLanguage = function(languageKey){
        $scope.view.leftMenuList = getDataBykey($scope.leftMenuList,languageKey);
        $scope.view.topMenuList = getDataBykey($scope.topMenuList,languageKey);
        $scope.view.contentList = getDataBykey($scope.contentList,languageKey);
        $scope.setContentItem('m.01');
    };
    $scope.setLanguage('ENG');

    //set the display template

    //open pic in a big window
    $scope.viewOriginalPic = function(url){
        var picurl = url;
        if (picurl ==null || picurl.length<=0){
            return;
        };
        OpenWindow=window.open("", "picwin", "height=750, width=1050,toolbar=no,scrollbars=yes"+",menubar=no");
        OpenWindow.document.write("<TITLE></TITLE>");
        OpenWindow.document.write("<BODY BGCOLOR=#ffffff>");
        OpenWindow.document.write("<h1></h1>");
        OpenWindow.document.write('<img src="'+picurl+'" height=100%, width=100% ></img>');
        OpenWindow.document.write("</BODY>");
        OpenWindow.document.write("</HTML>");
        OpenWindow.document.close()
    };

}]);

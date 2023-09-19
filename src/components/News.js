import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Alert from './Alert';

export class News extends Component {
    articlesOffline2 = {
        "status": "ok",
        "totalResults": 34,
        "articles": [{
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "Leyla Mohammed",
            "title": "Khloé Kardashian Felt “Guilty” Over Lack Of Bond With Son - BuzzFeed",
            "description": "“With True, it took me a couple of days to be like, ‘OK, this is my daughter,’ and I was super into it... With him, it’s taking me months.”",
            "url": "https://www.buzzfeed.com/leylamohammed/khloe-kardashian-felt-guilty-over-lack-of-bond-with-son",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2023-06/7/11/enhanced/0488db57db49/original-2489-1686138711-2.jpg?crop=1581:830;0,0%26downsize=1250:*",
            "publishedAt": "2023-06-08T04:16:02Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jack Baer",
            "title": "Women's College World Series: Oklahoma extends record win streak to 52 games, 1 win from 3rd straight title - Yahoo Sports",
            "description": "The Sooners are going for the second three-peat in NCAA softball history.",
            "url": "https://sports.yahoo.com/womens-college-world-series-oklahoma-extends-record-win-streak-to-52-games-1-win-from-3rd-straight-title-041443985.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/L6rsmLhCnLmgX_.HJ_XY2A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/52d47670-05b1-11ee-bbca-684c58a9a471",
            "publishedAt": "2023-06-08T04:14:00Z",
            "content": "Oklahoma softball is one win away from completing one of the greatest seasons in NCAA history.\r\nThe Sooners extended their NCAA record win streak to 52 games with a 5-0 victory over Florida State in … [+2239 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Scientists find ‘lost world’ in billion-year-old Australian rock - Al Jazeera English",
            "description": "Study says discovery of microscopic creatures could be the ‘oldest remnants’ of human lineage.",
            "url": "https://www.aljazeera.com/news/2023/6/8/scientists-find-lost-world-in-billion-year-old-australian-rock",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/06/ANU_RSES_-eukaryote_20230605P1010487-1686124803.jpg?resize=1920%2C1440",
            "publishedAt": "2023-06-08T04:08:35Z",
            "content": "Scientists have discovered a lost world of ancient organisms in billion-year-old rocks from northern Australia that they say could change the worlds understanding of humans earliest ancestors.\r\nThe m… [+3107 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Charles Trepany",
            "title": "'Vanderpump Rules': Raquel Leviss reveals shocking Tom Sandoval lie - USA TODAY",
            "description": "Here are all the shocking revelations from the final installment of the \"Vanderpump Rules\" finale, including a \"dementor\" insult.",
            "url": "https://www.usatoday.com/story/entertainment/tv/2023/06/07/vanderpump-rules-reunion-raquel-leviss-reveals-tom-sandoval-affair-timeline/70300235007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/06/08/USAT/cf5e9bb6-c573-4286-a75e-3a573cd9d201-NUP_201062_01225.JPG?crop=999,562,x1,y24&width=999&height=562&format=pjpg&auto=webp",
            "publishedAt": "2023-06-08T03:58:43Z",
            "content": "Wait, did he really just say that?\r\nThat was the question that seemed to be on the \"Vanderpump Rules\" casts' minds during the highly anticipated third and final installment of the Season 10 reunion, … [+4811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Biden vetoes bill to cancel student debt relief program | What to know - 11Alive",
            "description": "President Joe Biden on Wednesday vetoed legislation that would have canceled his plan to forgive student debt. The measure had been pushed by Republicans, bu...",
            "url": "https://www.youtube.com/watch?v=KgDEX0BwN3I",
            "urlToImage": "https://i.ytimg.com/vi/KgDEX0BwN3I/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYihUMA8=&rs=AOn4CLDtkFiJpSerauHRyI5NKK3tTxxsEQ",
            "publishedAt": "2023-06-08T03:22:09Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Taylor Telford, Gerrit De Vynck",
            "title": "Google, Salesforce try bribes and punishments to get workers back in offices - The Washington Post",
            "description": "Google is cracking down on remote work, while Salesforce is donating to charity for every day workers come in from June 12 to 23.",
            "url": "https://www.washingtonpost.com/business/2023/06/08/google-salesforce-return-to-office/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WRMNXDVAPESQON64BTFUKVTXGA.JPG&w=1440",
            "publishedAt": "2023-06-08T03:08:00Z",
            "content": "Comment on this story\r\nComment\r\nThe executives of corporate America are stepping up efforts to get workers back into the office, using a combination of threats and incentives to get employees to give… [+8275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Mike Pence tears into Donald Trump at 2024 campaign launch - BBC",
            "description": "Donald Trump's two-time running mate offers his most forceful repudiation of his ex-boss to date.",
            "url": "https://www.bbc.com/news/world-us-canada-65839793",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/864E/production/_130028343_gettyimages-1258511111.jpg",
            "publishedAt": "2023-06-08T02:51:51Z",
            "content": "Media caption, Watch: Mike Pence digs at Trump in 2024 campaign launch\r\nFormer US vice-president Mike Pence has offered his most forceful repudiation of Donald Trump to date during a speech launching… [+4769 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Gary Jones, Steff Chávez, Oliver Ralph, Donato Paolo Mancini, Alexandra White",
            "title": "Live news: Singapore's CIX clears 12000 tonnes of carbon credits on first trading day - Financial Times",
            "description": "",
            "url": "https://www.ft.com/content/b593c9b9-abff-46c6-ac18-8676913860ef",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F4b150cef-a6d3-411b-aab1-b17a18f59dec.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2023-06-08T02:11:15Z",
            "content": "Four children and two adults have been injured in a knife attack in the south eastern French city of Annecy, authorities said on Thursday.\r\nEmmanuel Macron, Frances president, called the attack absol… [+812 chars]"
        }]
    }
    articlesOffline = {
        "status": "ok",
        "totalResults": 34,
        "articles": [
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Radina Gigova,Xiaofei Xu,Oliver Briscoe",
                "title": "Children among eight injured in knife attack in southeast France, officials say - CNN",
                "description": "Children were among six people injured Thursday in a knife attack in Annecy, in southeast France, local officials said.",
                "url": "https://www.cnn.com/2023/06/08/europe/annecy-france-stabbing-attack-intl/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230608104032-20230608-annecy-france.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2023-06-08T09:44:00Z",
                "content": "Children were among six people injured Thursday in a knife attack in Annecy, in southeast France, local officials said.\r\nFour children sustained wounds following the incident, according to the prefec… [+1293 chars]"
            },
            {
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Samantha Schmidt, Adela Suliman, Leo Sands, Rachel Pannett",
                "title": "Ukraine live briefing: Zelensky calls for international aid as flood evacuations continue - The Washington Post",
                "description": "Ukraine's military advanced on Russian positions in the country's southeast, kicking off a long-anticipated counterattack to reclaim occupied territory from Russia.",
                "url": "https://www.washingtonpost.com/world/2023/06/08/russia-ukraine-war-news-counteroffensive/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FWCGCK4FFQKISMEY3LEERHOO3U.JPG&w=1440",
                "publishedAt": "2023-06-08T09:34:00Z",
                "content": "KYIV, Ukraine The Ukrainian military has launched a long-anticipated counterattack against occupying Russian forces, opening a crucial phase in the war aimed at restoring Ukraines territorial soverei… [+63 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "US East Coast blanketed in veil of smoke from Canadian fires - Reuters",
                "description": "Schools across the U.S. East Coast canceled outdoor activities, airline traffic slowed and millions of Americans were urged to stay indoors on Wednesday as smoke from <a href=\"/business/environment/raging-canada-wildfires-threaten-critical-infrastructure-forc…",
                "url": "https://www.reuters.com/business/environment/us-states-under-air-quality-alerts-canadian-smoke-drifts-south-2023-06-07/",
                "urlToImage": "https://www.reuters.com/resizer/dRBfo2zDanIFYjJNdhFHTK2ZmFw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JR4KM66AWFKJVEVGQ5MG5DJVJA.jpg",
                "publishedAt": "2023-06-08T09:26:00Z",
                "content": "NEW YORK, June 7 (Reuters) - Schools across the U.S. East Coast canceled outdoor activities, airline traffic slowed and millions of Americans were urged to stay indoors on Wednesday as smoke from Can… [+5839 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "SciTechDaily"
                },
                "author": null,
                "title": "NASA's Parker Solar Probe Plunges Into Fast Solar Wind and Discovers Its Mysterious Source - SciTechDaily",
                "description": "NASA's Parker Solar Probe probe got close enough to sun's surface to see hidden granular features. NASA's Parker Solar Probe (PSP) has flown close enough to the sun to detect the fine structure of the solar wind close to where it is generated at the sun's sur…",
                "url": "https://scitechdaily.com/?p=284640",
                "urlToImage": "https://scitechdaily.com/images/Parker-Solar-Probe-Touches-Sun.gif",
                "publishedAt": "2023-06-08T08:38:44Z",
                "content": "ByUniversity of California - BerkeleyJune 8, 2023\r\nNASAs Parker Solar Probe (PSP) has detected the origin and structure of the solar wind close to the suns surface, observing high-energy particles al… [+9730 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Police"
                },
                "author": "Rajesh Pandey",
                "title": "Google scraps Android TV 13, releases Android TV 14 beta - Android Police",
                "description": "Android TV 14 could let you receive call notifications from compatible apps on your TV",
                "url": "https://www.androidpolice.com/google-scraps-android-tv-13-releases-android-tv-14-beta/",
                "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/05/tcl-6-series-1.jpg",
                "publishedAt": "2023-06-08T07:45:00Z",
                "content": "Android runs on a vast majority of devices with varying form factors. Besides smartphones, tablets, cars, and watches, the OS also powers the best Android TV boxes and televisions. In May 2022, Googl… [+1714 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "Phoebe Natanson, Kevin Shalvey",
                "title": "Pope's night 'passed well' after intestinal surgery in Rome - ABC News",
                "description": "The pontiff is expected to be in the hospital recovering for several days.",
                "url": "https://abcnews.go.com/International/pope-francis-intestinal-surgery-rome-wednesday/story?id=99893051",
                "urlToImage": "https://s.abcnews.com/images/International/francis-vati_hpMain_20230607-045948_16x9_992.jpg",
                "publishedAt": "2023-06-08T07:30:21Z",
                "content": "ROME and LONDON -- Pope Francis' night \"passed well\" after he underwent intestinal surgery on Wednesday, Vatican officials said Thursday morning.\r\nThe Holy See Press Office had said Wednesday evening… [+1363 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Times of Israel"
                },
                "author": null,
                "title": "IDF razes Ramallah home of terrorist accused of deadly Jerusalem bus stop bombings - The Times of Israel",
                "description": "Six Palestinians wounded in clashes with army near home of Eslam Froukh, 26, charged with planting explosives that killed 2 in attack last November",
                "url": "https://www.timesofisrael.com/idf-enters-ramallah-to-raze-home-of-terrorist-behind-jerusalem-bus-stop-bombings/",
                "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/06/vlcsnap-2023-06-08-09h47m26s020-1024x640.png",
                "publishedAt": "2023-06-08T07:09:14Z",
                "content": "The Israel Defense Forces on Thursday demolished the Ramallah home of a Palestinian terrorist charged with carrying out a deadly twin bombing attack in Jerusalem last year, the military said.\r\nThe mi… [+3631 chars]"
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": "Ramona Shelburne",
                "title": "NBA Finals 2023 -- Jokic and Murray's chemistry was on full display in Game 3 - ESPN",
                "description": "The Nikola Jokic-Jamal Murray two-man game is as devastating as it is beautiful. And it's because they started perfecting it long before they ever teamed up in Denver.",
                "url": "https://www.espn.com/nba/story/_/id/37816458/nba-finals-2023-jokic-murray-chemistry-was-full-display-game-3",
                "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0608%2Fr1184001_1296x729_16%2D9.jpg",
                "publishedAt": "2023-06-08T06:15:00Z",
                "content": "MIAMI -- This time of year, lots of old basketball videos circulate around social media. Interviews from years ago suddenly sound prescient based off of what's happening game to game in the NBA Final… [+4347 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "Inter Miami with Lionel Messi: How the MLS side stacks up after landing the legendary Argentine superstar - CBS Sports",
                "description": "Miami instantly goes from last place to a possible title contender by adding the world's greatest player",
                "url": "https://www.cbssports.com/soccer/news/inter-miami-with-lionel-messi-how-the-mls-side-stacks-up-after-landing-the-legendary-argentine-superstar/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/07/7e03bf7c-3f8e-4564-b797-e7f1162782ce/thumbnail/1200x675/418876f26c8f88e4353035c44cd9c3ac/untitled-design-2023-06-07t160723-232.png",
                "publishedAt": "2023-06-08T06:10:00Z",
                "content": "In a seismic move for Major League Soccer, Lionel Messi is moving to Inter Miami after his contract expires at Paris Saint-Germain. While Messi won't be able to play for the club until after the summ… [+7853 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "20 MLB players whose Hall of Fame careers were derailed by injury, as Jacob deGrom faces another setback - CBS Sports",
                "description": "Will Jacob deGrom join the likes of Don Mattingly, Dale Murphy, Johan Santana and the rest of this list?",
                "url": "https://www.cbssports.com/mlb/news/20-mlb-players-whose-hall-of-fame-careers-were-derailed-by-injury-as-jacob-degrom-faces-another-setback/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/07/e32fce7d-92bf-4bbb-bda8-45193449a12f/thumbnail/1200x675/8ea197d6ef3ce1ad20282b738a0231f7/johanmattinglynomar-usatsi.png",
                "publishedAt": "2023-06-08T06:08:00Z",
                "content": "The season-ending injury to Rangers ace Jacob deGrom already sent us down the path of examining how this impacts his Hall of Fame chances. The overarching fear is he ends up on the same list of so ma… [+9069 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": null,
                "title": "In Russia, the talk is of 'war' - even from Putin - Reuters",
                "description": "For more than 15 months Russia has been fighting a war in Ukraine that the Kremlin refused to call a war - but that is changing: President Vladimir Putin is using the word \"war\" more often.",
                "url": "https://www.reuters.com/world/europe/russia-talk-is-war-even-putin-2023-06-08/",
                "urlToImage": "https://www.reuters.com/resizer/jxNbpWrQUZLsLMJAS97fWAlfLoo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5MIAQITII5PARPILCKQKCKRPH4.jpg",
                "publishedAt": "2023-06-08T06:03:00Z",
                "content": "MOSCOW, June 8 (Reuters) - For more than 15 months Russia has been fighting a war in Ukraine that the Kremlin refused to call a war - but that is changing: President Vladimir Putin is using the word … [+5404 chars]"
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "Lauran Neergaard",
                "title": "Newer heart transplant method could allow more patients a chance at lifesaving surgery - The Associated Press",
                "description": "WASHINGTON (AP) — Most transplanted hearts are from donors who are brain dead, but new research shows a different approach can be just as successful and boost the number of available organs. It's called donation after circulatory death, a method long used to …",
                "url": "https://apnews.com/article/heart-transplant-donation-shortage-047da7c0bc9935e98421ad64ec6506bd",
                "urlToImage": "https://storage.googleapis.com/afs-prod/media/903745a5d4494d6398a6249ee7f6dbce/3000.webp",
                "publishedAt": "2023-06-08T05:01:11Z",
                "content": "WASHINGTON (AP) Most transplanted hearts are from donors who are brain dead, but new research shows a different approach can be just as successful and boost the number of available organs.\r\nIts calle… [+3827 chars]"
            }
        ]
    }
    static defaultProps = {
        country: "in",
        pageSize: 12,
        keyApi: process.env.REACT_APP_NEWS_API_KEY,
        category: "general"

    }
    api = this.props.keyApi;
    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        apiKey: PropTypes.string,
        category: PropTypes.string
    }
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articlesOffline.articles,
            page: 1,
            totalResults: 0,
            loading: true,
            query: props.q,
            alert: {}
        };
        document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`
    }
    url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}`
    fetchData = async (options = "") => {
        // this.props.setProgress(0);
        this.setState({ loading: true });
        // return new Promise((res, req) => {
        //     setTimeout(() => {
        //         res(this.articlesOffline);
        //         this.counter = "2";
        //         this.props.setProgress(0);
        //         // res(this.articlesOffline2);
        //     }, 2000);
        // });
        let res = await fetch(this.url + options);
        this.props.setProgress(30);
        if (res.status === "error" && res.code === "apiKeyExhausted") {
            this.props.displayAlert("Api key is Exhausted", "info");
            this.api = prompt("Enter your Api key to continue");
        }
        if (res.ok) {
            let data = await res.json();
            this.props.setProgress(70);
            if (data.totalResults >= 1 && data.articles >= 1) {
                this.articlesOffline = data;
                return data;
            } else {
                return {
                    ...this.articlesOffline
                }
            }
        } else {
            return {
                ...this.articlesOffline
            }
        }
    }
    async componentDidMount() {
        this.buttonType();
        // if (this.props.q && this.props.q !== "") {
        //     this.url = `https://newsapi.org/v2/top-headlines?q=${this.props.q}&ountry=${this.props.country}`
        // }
        let data = await this.fetchData(`&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=` + this.api);
        console.log(data);
        this.setState({
            articles: data.articles,
            totalResults: this.state.totalResults + data.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }
    getLength() {
        return this.state.articles.length;
    }

    // These two buttons are removed
    // handleOnPreviousClick = async () => {
    //     this.setState({
    //         articles: (await this.fetchData(`&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}&apiKey=` + this.api)).articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     });
    // }
    // handleOnNextClick = async () => {
    //     this.setState({
    //         articles: (await this.fetchData(`&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=` + this.api)).articles,
    //         page: this.state.page + 1,
    //         loading: false
    //     });
    // }

    fetchMoreData = async () => {
        this.props.setProgress(0);
        let res = await fetch(this.url + `&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=${this.api}`);
        this.props.setProgress(40);
        if (res.status === "error" && res.code === "apiKeyExhausted") {
            this.props.displayAlert("Api key is Exhausted", "info");
            this.api = prompt("Enter your Api key to continue");
        }
        if (res.ok) {
            let data = await res.json();
            this.props.setProgress(70);
            if (data.totalResults > 1 && data.articles.length > 1) {
                this.setState({
                    page: this.state.page + 1,
                    articles: this.state.articles.concat(data.articles)
                })
                this.props.setProgress(100);
                this.props.displayAlert("Here is the news related to: " + this.props.q, "success");
            } else {
                // this.props.setProgress(0);
                this.props.displayAlert("Scroll down for more news!", "warning");

            }
            this.props.setProgress(100);
        } else {
            this.props.displayAlert("Search not found: " + this.props.q, "info");
        }
    }

    buttonType = () => {
        if (this.props.category === 'general') {
            this.setState({
                type: 'primary'
            });
        } else if (this.props.category === 'sports') {
            this.setState({
                type: 'secondary'
            });
        } else if (this.props.category === 'health') {
            this.setState({
                type: 'success'
            });
        } else if (this.props.category === 'business') {
            this.setState({
                type: 'danger'
            });
        } else if (this.props.category === 'science') {
            this.setState({
                type: 'warning'
            });
        } else if (this.props.category === 'technology') {
            this.setState({
                type: 'info'
            });
        } else if (this.props.category === 'entertainment') {
            this.setState({
                type: 'info'
            });
        }
    }
    componentDidUpdate = async (prevProps, prevState, snapUpdate) => {
        if (prevProps.q !== this.props.q) {
            console.log("Props in News:" + this.props.q)
            console.log("PrevProps in News:" + prevProps.q)
            try {
                console.log("Fetching")
                this.url = `https://newsapi.org/v2/top-headlines?q=${this.props.q}&ountry=${this.props.country}`
                this.props.setProgress(0);
                let res = await fetch(this.url + `&pageSize=${this.props.pageSize}&apiKey=${this.api}`);
                this.props.setProgress(40);
                if (res.ok) {
                    let data = await res.json();
                    this.props.setProgress(70);
                    console.log(this.url + `&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=${this.api}`)
                    console.log(data);
                    if (data.totalResults > 1 && data.articles.length > 1) {
                        this.setState({
                            page: this.state.page + 1,
                            articles: data.articles
                        })
                        this.props.setProgress(100);
                        this.props.displayAlert("Here is the news related to: " + this.props.q, "success");
                        < Alert alert={this.state.alert} />
                        this.url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}`
                    } else {
                        console.log("false");
                        // this.props.setProgress(0);
                        this.props.displayAlert("Scroll down for more news!", "warning");
                        < Alert alert={this.state.alert} />
                        console.log("false");
                    }
                } else {
                    this.props.displayAlert("Api key is Exhausted", "info");
                    this.api = prompt("Enter your Api key to continue");
                    this.setState({
                        page: this.state.page + 1,
                        articles: this.articlesOffline.articles
                    })
                    this.props.setProgress(100);
                    this.props.displayAlert("Here is the news related to: " + this.props.q, "success");
                    < Alert alert={this.state.alert} />
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    render() {
        return (
            // <div className="container">
            <>
                <h2 className='text-center' style={{ margin: "80px 0px 30px 0px" }}>News-Bharat - Top {this.capitalize(this.props.category)} HeadLines</h2>
                {this.state.loading && <Loading />}
                <InfiniteScroll
                    dataLength={this.getLength()}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.articles.totalResults}
                    loader={<Loading />}
                >
                    <div className="container" style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }}>
                        {/* style={{
                            position: "absolute",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "-17px",
                            overflowY: "scroll",
                        }} */}
                        <div className="row" >
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-4 my-3">
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, element.title.length / 2) : "No Title"}
                                        description={element.description ? element.description.slice(0, element.description.length / 1.2) : "Description not available"}
                                        imageUrl={element.urlToImage} publishedAt={element.publishedAt}
                                        author={element.author} url={element.url} source={element.source} type={this.state.type} />
                                </div>
                            })}
                        </div>
                    </div >
                </InfiniteScroll >
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handleOnPreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleOnNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News;

Quiz GPT är den ultimata applikationen för att generera quiz! Att skapa ett quiz är jätteenkelt. Du som användare behöver inte komma på några frågor själv och du kan själv delta i quizet. Skriv in vad du vill att quizet ska handla om, vänta medans quizet genereras och börja sedan quiza! 

Quiz GPT är en applikation som använder OpenAIs API. Med API-modellen gpt-3.5-turbo tar applikationen användarens input och matar in detta i en, av oss, förskriven prompt till APIt. APIt skickar sedan tillbaka ett quiz i JSON-format enligt det angivna temat. I applikationen presenterar vi quizet på ett klassiskt quiz-vis där användaren kan se frågorna, klicka i sitt svar och se poängställning. I local storage sparar applikationen användarens spelhistorik och på så sätt kan användaren se sin ”All time score” i procent. 

Quiz GPT är byggt med ramverket React. Vid valet av ramverk var vi från början ganska inställda på att välja React. Anledningen till det, är ramverkets popularitet och efterfrågan på arbetsmarknaden. Det finns dock flera andra skäl till att använda React. För det första är React känt för sin flexibilitet och skalbarhet. Det tillåter oss att bygga komponentbaserade gränssnitt på ett modulärt sätt, vilket gör det lätt att återanvända och vidareutveckla vår kod. Reacts virtuella DOM-koncept möjliggör effektiva och snabba uppdateringar av användargränssnittet. En annan anledning till att välja React är deras omfattande community. Online finns det mycket information att tillgå de stunder vi har kört fast. Vid valet av ramverk jämförde vi också React med Vue och Angular. Vue är kanske mest känt för att vara ett ramverk som passar bra för nybörjare. Det ska vara relativt lätt att komma igång med och har bra funktionalitet för mindre applikationer. Dock är Vue lite begränsat, bland annat när det kommer till tredje-parts-bibliotek. Angular, till skillnad från Vue, sägs vara ett ramverk med mycket högre tröskel. Att lära sig Angular tar ofta längre tid eftersom koden skrivs i TypeScript. Att använda Angular passar sig också oftast bättre om det är en större applikation som ska byggas. 





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

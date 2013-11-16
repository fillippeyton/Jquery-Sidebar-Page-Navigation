# Jquery Sidebar Page Navigation

A Jquery plugin that adds a sidebar of links to jump to certain parts of a page.

## Features
- Doesn't require extra markup (pure JS)
- Options for customizable classes/HTML Wrapper, animation speed, and more

## Requirements
- Jquery
- CSS to style navigation

## Options
```javascript
$.pageNavigation({
	navigationTag : 'nav',
	// HTML Tag to wrap entire navigation in
	// Accepts: String
	// Default: 'nav'

	navigationClass : 'pageNavigation',
	// Class to give navigation
	// Accepts: String
	// Default: 'pageNavigation'


	scrollToTriggerClass : 'scrollToTrigger',
	// Class to give navigation items
	// Accepts: String
	// Default: 'scrollToTrigger'


	navigationTopPadding : 200,
	// Top padding on Navigation
	// Accepts: Integer
	// Default: 200

	pageNavigationTargets : '.pageNavigationTarget',
	// Sections to be added to navigation items
	// Accepts: Jquery Selector or String
	// Default: '.pageNavigationTarget'

	navigationAnimationSpeed : 500,
	// Speed of navigation animation in milliseconds
	// Accepts: Integer
	// Default: 500
});
```

## Q/A
>**Q)** Why did you choose to inject HTML through javascript instead of having the developer add HTML to the page themselves?
>**A)** I'm a huge fan of not cluttering a page with unnecessary HTML markup, so I opted to inject the HTML by javascript. There is options to customize the markup/classes this plugin uses. This way, your code is easier to maintain.

>**Q)** Why isn't this plugin responsive?!
>**A)** When I use this plugin, I will opt to hide the sidebar on smaller screens. This is because there is already a limited amount of space in small screens, so having another navigation would not be ideal. If you have a suggestion of how to make this navigation work at smaller screens, send a pull request =]
/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'convert') {
      document.documentElement.style.filter = 'grayscale(100%)';
      sendResponse({ message: 'Website converted to black and white.' });
    } else if (request.action === 'reset') {
      document.documentElement.style.filter = 'none';
      sendResponse({ message: 'Website reset to original colors.' });
    } else if (request.action === 'fa') {
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
    sendResponse({ message: 'Website font to Arial.' });
    }
    else if (request.action === 'fcs') {
    document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", monospace';
    sendResponse({ message: 'Website font to Comic Sans.' });
    }
    else if (request.action === 'bgr') {
        document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", monospace';
        sendResponse({ message: 'Website Background to Red.' });
        }
  });*/
  
/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var colors = {

        'complete': {

            'text': 'white',

            'background': 'black',

            'links': 'red'

        },

   

        'red-green': {

            'text': 'white',

            'background': '#184890 !important',

            'links': '#ffd800'

        },

   

        'blue-yellow': {

            'text': 'white',

            'background': '#BF692C',

            'links': 'yellow'

        }

    };
    
  if (request.action === 'convert') {
    document.documentElement.style.filter = 'grayscale(100%)';
    sendResponse({ message: 'Website converted to black and white.' });
  } else if (request.action === 'reset') {
    document.documentElement.style.filter = 'none';
    sendResponse({ message: 'Website reset to original colors.' });
  }
  else if (request.action === 'fa') {
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
    sendResponse({ message: 'Website reset to font Arial.' });
  }
  else if (request.action === 'fcs') {
    document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", monospace';
    sendResponse({ message: 'Website reset to font Comic Sans.' });
  }
  else if (request.action === 'bgw') {
    document.body.style.backgroundColor = 'white';
    sendResponse({ message: 'Website reset background to white.' });
  }
  else if (request.action === 'bgb') {
    document.body.style.backgroundColor = 'black';
    sendResponse({ message: 'Website reset background to black.' });
  }
  else if (request.action === 'bgr') {
    document.body.style.color = "#ff0000";
    sendResponse({ message: 'Website reset background to red.' });
  }
  /*else if (request.action === 'bgg') {
    document.links.style.color =  '#008000';
    sendResponse({ message: 'Website reset background to green.' });
  }
  else if (request.action === 'bgg') {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = 'green';
  });
  sendResponse({ message: 'Website link color changed to green.' });
}
  else if (request.action === 'bgbl') {
    document.body.style.background = 'green !important';
    sendResponse({ message: 'Website reset background to blue.' });
  }
  else if (request.action === 'bgy') {
    document.body.style.backgroundColor = 'yellow';
    sendResponse({ message: 'Website reset background to yellow.' });
  }
  
  else if (request.action === 'rg') {
    
    document.body.style.color = 'white';

    document.body.style.background = colors['red-green'].background;
    
    //document.body.style.setProperty('background-color', colors['red-green'].background, 'important');
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
    link.style.color = colors['red-green'].links;
  });
  }
});*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var colors = {
    'complete': {
      'text': 'white',
      'background': 'black',
      'links': 'red'
    },
    'red-green': {
      'text': 'white',
      'background': '#184890',
      'links': '#ffd800'
    },
    'blue-yellow': {
      'text': 'white',
      'background': '#BF692C',
      'links': 'yellow'
    }
  };

 

  if (request.action === 'convert') {
    document.documentElement.style.filter = 'grayscale(100%)';
    sendResponse({ message: 'Website converted to black and white.' });
  } else if (request.action === 'reset') {
    document.documentElement.style.filter = 'none';
    sendResponse({ message: 'Website reset to original colors.' });
  } else if (request.action === 'fa') {
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
    sendResponse({ message: 'Website reset to font Arial.' });
  } else if (request.action === 'fcs') {
    document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", monospace';
    sendResponse({ message: 'Website reset to font Comic Sans.' });
  } /*else if (request.action === 'bgw') {
    document.body.style.backgroundColor = 'white';
    sendResponse({ message: 'Website reset background to white.' });
  } else if (request.action === 'bgb') {
    document.body.style.backgroundColor = 'black';
    sendResponse({ message: 'Website reset background to black.' });
  } else if (request.action === 'bgr') {
    document.body.style.color = "#ff0000";
    sendResponse({ message: 'Website reset background to red.' });
  } else if (request.action === 'bgg') {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = 'green';
    });
    sendResponse({ message: 'Website link color changed to green.' });
  } else if (request.action === 'bgbl') {
    document.body.style.background = colors['red-green'].background;
    sendResponse({ message: 'Website reset background to blue.' });
  } else if (request.action === 'bgy') {
    document.body.style.backgroundColor = 'yellow';
    sendResponse({ message: 'Website reset background to yellow.' });
  } */
  
  else if (request.action === 'rg') {
    document.body.style.color = 'white';
    document.body.style.background = '#184890';
    //document.body.style.setProperty('background-color', 'black', 'important' );
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = '#ffd800';
    });
  }
  else if (request.action === 'by') {
    document.body.style.color = 'white';
    document.body.style.background = '#BF692C';
    //document.body.style.setProperty('background-color', 'black', 'important' );
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = 'yellow';
    });
  }
  else if (request.action === 'c') {
    document.body.style.color = 'white';
    document.body.style.background = 'black';
    //document.body.style.setProperty('background-color', 'black', 'important' );
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = 'red';
    });
  }
});
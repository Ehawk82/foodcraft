﻿// For an introduction to the Blank template, see the following documentation:
// https://go.microsoft.com/fwlink/?LinkId=232509

(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
    var isFirstActivation = true;

    var ViewManagement = Windows.UI.ViewManagement;
    var ApplicationViewWindowingMode = ViewManagement.ApplicationViewWindowingMode;
    var ApplicationView = ViewManagement.ApplicationView;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.voiceCommand) {
			// TODO: Handle relevant ActivationKinds. For example, if your app can be started by voice commands,
			// this is a good place to decide whether to populate an input field or choose a different initial view.
		}
		else if (args.detail.kind === activation.ActivationKind.launch) {
			// A Launch activation happens when the user launches your app via the tile
			// or invokes a toast notification by clicking or tapping on the body.
			if (args.detail.arguments) {
				// TODO: If the app supports toasts, use this value from the toast payload to determine where in the app
				// to take the user in response to them invoking a toast notification.
			}
			else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
				// TODO: This application had been suspended and was then terminated to reclaim memory.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
				// Note: You may want to record the time when the app was last suspended and only restore state if they've returned after a short period.
			}
		}

		if (!args.detail.prelaunchActivated) {
			// TODO: If prelaunchActivated were true, it would mean the app was prelaunched in the background as an optimization.
			// In that case it would be suspended shortly thereafter.
			// Any long-running operations (like expensive network or disk I/O) or changes to user state which occur at launch
			// should be done here (to avoid doing them in the prelaunch case).
			// Alternatively, this work can be done in a resume or visibilitychanged handler.
            myUI.preloader();
		}

		if (isFirstActivation) {
			// TODO: The app was activated and had not been running. Do general startup initialization here.
			document.addEventListener("visibilitychange", onVisibilityChanged);
            args.setPromise(WinJS.UI.processAll());

            ApplicationView.preferredLaunchWindowingMode = ApplicationViewWindowingMode.fullScreen;
            myUI.init();
		}

		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
			// TODO: The app just became visible. This may be a good time to refresh the view.
		}
	}

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};
    var myUI;

    myUI = {
        bySel: (x) => { return document.querySelector(x); },
        bySelAll: (x) => { return document.querySelectorAll(x); },
        createEle: (x) => { return document.createElement(x); },
        byTag: (x, y) => { return document.getElementsByTagName(x)[y]; },
        
        preloader: () => {
            //console.log("preloader");
        },
        init: () => {
            var userFrame = myUI.createEle("div"),
                dvButtons = myUI.createEle("div"),
                homeBtn = myUI.createEle("button"),
                settBtn = myUI.createEle("button"),
                fridgeBtn = myUI.createEle("button"),
                ideaBtn = myUI.createEle("button"),
                redBookBtn = myUI.createEle("button"),
                blueBookBtn = myUI.createEle("button"),
                greenBookBtn = myUI.createEle("button"),
                cartBtn = myUI.createEle("button"),
                output = myUI.createEle("div");

            output.innerHTML = "...";
            cartBtn.innerHTML = "🛒";
            greenBookBtn.innerHTML = "📗";
            blueBookBtn.innerHTML = "📘";
            redBookBtn.innerHTML = "📕";
            ideaBtn.innerHTML = "💡";
            fridgeBtn.innerHTML = "🍽";
            settBtn.innerHTML = "⚙";
            homeBtn.innerHTML = "🏠";

            output.className = "output";

            cartBtn.className = "theBtns";
            greenBookBtn.className = "theBtns";
            blueBookBtn.className = "theBtns";
            redBookBtn.className = "theBtns";
            ideaBtn.className = "theBtns";
            fridgeBtn.className = "theBtns";
            settBtn.className = "theBtns";
            homeBtn.className = "theBtns";

            dvButtons.className = "dvButtons";

            userFrame.className = "userFrame";


            dvButtons.appendChild(homeBtn);
            dvButtons.appendChild(settBtn);
            dvButtons.appendChild(fridgeBtn);
            dvButtons.appendChild(ideaBtn);
            dvButtons.appendChild(redBookBtn);
            dvButtons.appendChild(blueBookBtn);
            dvButtons.appendChild(greenBookBtn);
            dvButtons.appendChild(cartBtn);
            dvButtons.appendChild(output);
            userFrame.appendChild(dvButtons);
            dvContain.appendChild(userFrame);
        }
    };


	app.start();

})();

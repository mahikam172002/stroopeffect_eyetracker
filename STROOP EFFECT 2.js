/************************ 
 * Stroop Effect 2 *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'STROOP EFFECT 2';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(INTRODUCTIONRoutineBegin());
flowScheduler.add(INTRODUCTIONRoutineEachFrame());
flowScheduler.add(INTRODUCTIONRoutineEnd());
flowScheduler.add(WEBCAM_SETUPRoutineBegin());
flowScheduler.add(WEBCAM_SETUPRoutineEachFrame());
flowScheduler.add(WEBCAM_SETUPRoutineEnd());
flowScheduler.add(CALIBERATIONRoutineBegin());
flowScheduler.add(CALIBERATIONRoutineEachFrame());
flowScheduler.add(CALIBERATIONRoutineEnd());
flowScheduler.add(INSTRUCTIONSRoutineBegin());
flowScheduler.add(INSTRUCTIONSRoutineEachFrame());
flowScheduler.add(INSTRUCTIONSRoutineEnd());
flowScheduler.add(FIXATIONRoutineBegin());
flowScheduler.add(FIXATIONRoutineEachFrame());
flowScheduler.add(FIXATIONRoutineEnd());
const XLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(XLoopBegin(XLoopScheduler));
flowScheduler.add(XLoopScheduler);
flowScheduler.add(XLoopEnd);


flowScheduler.add(FIXATION_2RoutineBegin());
flowScheduler.add(FIXATION_2RoutineEachFrame());
flowScheduler.add(FIXATION_2RoutineEnd());
flowScheduler.add(BYE_BYERoutineBegin());
flowScheduler.add(BYE_BYERoutineEachFrame());
flowScheduler.add(BYE_BYERoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stroop task 5 excel2.xlsx', 'path': 'stroop task 5 excel2.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var INTRODUCTIONClock;
var text;
var key_resp;
var WEBCAM_SETUPClock;
var CALIBERATIONClock;
var INSTRUCTIONSClock;
var text_2;
var key_resp_2;
var FIXATIONClock;
var text_4;
var trialClock;
var text_3;
var key_resp_3;
var FIXATION_2Clock;
var text_5;
var BYE_BYEClock;
var text_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "INTRODUCTION"
  INTRODUCTIONClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "WELCOME TO THE STROOP TEST!\nPRESS 'SPACE' TO ENTER",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('PINK'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WEBCAM_SETUP"
  WEBCAM_SETUPClock = new util.Clock();
  // Initialize components for Routine "CALIBERATION"
  CALIBERATIONClock = new util.Clock();
  // Initialize components for Routine "INSTRUCTIONS"
  INSTRUCTIONSClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "STROOP TEST INSTRUCTIONS\n\nRespond to the INK COLOUR, not the word.\n\nR = Red | G = Green | B = Blue | Y = Yellow\n\nRespond as quickly and accurately as possible.\n\nPress 'SPACE' to begin.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('PINK'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FIXATION"
  FIXATIONClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FIXATION_2"
  FIXATION_2Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "BYE_BYE"
  BYE_BYEClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'THANK YOU FOR YOUR TIME\nBYE BYE!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('PINK'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var INTRODUCTIONMaxDurationReached;
var _key_resp_allKeys;
var INTRODUCTIONMaxDuration;
var INTRODUCTIONComponents;
function INTRODUCTIONRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'INTRODUCTION' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    INTRODUCTIONClock.reset();
    routineTimer.reset();
    INTRODUCTIONMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('INTRODUCTION.started', globalClock.getTime());
    INTRODUCTIONMaxDuration = null
    // keep track of which components have finished
    INTRODUCTIONComponents = [];
    INTRODUCTIONComponents.push(text);
    INTRODUCTIONComponents.push(key_resp);
    
    for (const thisComponent of INTRODUCTIONComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function INTRODUCTIONRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'INTRODUCTION' ---
    // get current time
    t = INTRODUCTIONClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of INTRODUCTIONComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function INTRODUCTIONRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'INTRODUCTION' ---
    for (const thisComponent of INTRODUCTIONComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('INTRODUCTION.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "INTRODUCTION" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WEBCAM_SETUPMaxDurationReached;
var WEBCAM_SETUPMaxDuration;
var WEBCAM_SETUPComponents;
function WEBCAM_SETUPRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WEBCAM_SETUP' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WEBCAM_SETUPClock.reset();
    routineTimer.reset();
    WEBCAM_SETUPMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('WEBCAM_SETUP.started', globalClock.getTime());
    WEBCAM_SETUPMaxDuration = null
    // keep track of which components have finished
    WEBCAM_SETUPComponents = [];
    
    for (const thisComponent of WEBCAM_SETUPComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WEBCAM_SETUPRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WEBCAM_SETUP' ---
    // get current time
    t = WEBCAM_SETUPClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WEBCAM_SETUPComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WEBCAM_SETUPRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WEBCAM_SETUP' ---
    for (const thisComponent of WEBCAM_SETUPComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WEBCAM_SETUP.stopped', globalClock.getTime());
    // the Routine "WEBCAM_SETUP" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CALIBERATIONMaxDurationReached;
var CALIBERATIONMaxDuration;
var CALIBERATIONComponents;
function CALIBERATIONRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CALIBERATION' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CALIBERATIONClock.reset();
    routineTimer.reset();
    CALIBERATIONMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('CALIBERATION.started', globalClock.getTime());
    CALIBERATIONMaxDuration = null
    // keep track of which components have finished
    CALIBERATIONComponents = [];
    
    for (const thisComponent of CALIBERATIONComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function CALIBERATIONRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CALIBERATION' ---
    // get current time
    t = CALIBERATIONClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CALIBERATIONComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CALIBERATIONRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'CALIBERATION' ---
    for (const thisComponent of CALIBERATIONComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('CALIBERATION.stopped', globalClock.getTime());
    // the Routine "CALIBERATION" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var INSTRUCTIONSMaxDurationReached;
var _key_resp_2_allKeys;
var INSTRUCTIONSMaxDuration;
var INSTRUCTIONSComponents;
function INSTRUCTIONSRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'INSTRUCTIONS' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    INSTRUCTIONSClock.reset();
    routineTimer.reset();
    INSTRUCTIONSMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('INSTRUCTIONS.started', globalClock.getTime());
    INSTRUCTIONSMaxDuration = null
    // keep track of which components have finished
    INSTRUCTIONSComponents = [];
    INSTRUCTIONSComponents.push(text_2);
    INSTRUCTIONSComponents.push(key_resp_2);
    
    for (const thisComponent of INSTRUCTIONSComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function INSTRUCTIONSRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'INSTRUCTIONS' ---
    // get current time
    t = INSTRUCTIONSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of INSTRUCTIONSComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function INSTRUCTIONSRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'INSTRUCTIONS' ---
    for (const thisComponent of INSTRUCTIONSComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('INSTRUCTIONS.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "INSTRUCTIONS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FIXATIONMaxDurationReached;
var FIXATIONMaxDuration;
var FIXATIONComponents;
function FIXATIONRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FIXATION' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FIXATIONClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    FIXATIONMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('FIXATION.started', globalClock.getTime());
    FIXATIONMaxDuration = null
    // keep track of which components have finished
    FIXATIONComponents = [];
    FIXATIONComponents.push(text_4);
    
    for (const thisComponent of FIXATIONComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FIXATIONRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FIXATION' ---
    // get current time
    t = FIXATIONClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_4.tStop = t;  // not accounting for scr refresh
      text_4.frameNStop = frameN;  // exact frame index
      // update status
      text_4.status = PsychoJS.Status.FINISHED;
      text_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FIXATIONComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FIXATIONRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FIXATION' ---
    for (const thisComponent of FIXATIONComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('FIXATION.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FIXATIONMaxDurationReached) {
        FIXATIONClock.add(FIXATIONMaxDuration);
    } else {
        FIXATIONClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var X;
function XLoopBegin(XLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    X = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stroop task 5 excel2.xlsx',
      seed: undefined, name: 'X'
    });
    psychoJS.experiment.addLoop(X); // add the loop to the experiment
    currentLoop = X;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisX of X) {
      snapshot = X.getSnapshot();
      XLoopScheduler.add(importConditions(snapshot));
      XLoopScheduler.add(trialRoutineBegin(snapshot));
      XLoopScheduler.add(trialRoutineEachFrame());
      XLoopScheduler.add(trialRoutineEnd(snapshot));
      XLoopScheduler.add(XLoopEndIteration(XLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function XLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(X);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function XLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _key_resp_3_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    text_3.setColor(new util.Color(colors));
    text_3.setText(word);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_3);
    trialComponents.push(key_resp_3);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_3.tStop = t;  // not accounting for scr refresh
      text_3.frameNStop = frameN;  // exact frame index
      // update status
      text_3.status = PsychoJS.Status.FINISHED;
      text_3.setAutoDraw(false);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_3.tStop = t;  // not accounting for scr refresh
      key_resp_3.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_3.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_3.tStop = t;  // not accounting for scr refresh
        key_resp_3.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_3.status = PsychoJS.Status.FINISHED;
        key_resp_3.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_3 is active this frame...
      if (key_resp_3.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_3.getKeys({
          keyList: typeof ['r','b','y','g'] === 'string' ? [['r','b','y','g']] : ['r','b','y','g'], 
          waitRelease: false
        });
        _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
        if (_key_resp_3_allKeys.length > 0) {
          key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
          key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
          key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of trialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trial' ---
      for (const thisComponent of trialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_3.corr, level);
      }
      psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
      if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
          psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
          routineTimer.reset();
          }
      
      key_resp_3.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (trialMaxDurationReached) {
          trialClock.add(trialMaxDuration);
      } else {
          trialClock.add(2.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var FIXATION_2MaxDurationReached;
var FIXATION_2MaxDuration;
var FIXATION_2Components;
function FIXATION_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'FIXATION_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      FIXATION_2Clock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      FIXATION_2MaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('FIXATION_2.started', globalClock.getTime());
      FIXATION_2MaxDuration = null
      // keep track of which components have finished
      FIXATION_2Components = [];
      FIXATION_2Components.push(text_5);
      
      for (const thisComponent of FIXATION_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function FIXATION_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'FIXATION_2' ---
      // get current time
      t = FIXATION_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_5* updates
      if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_5.tStart = t;  // (not accounting for frame time here)
        text_5.frameNStart = frameN;  // exact frame index
        
        text_5.setAutoDraw(true);
      }
      
      
      // if text_5 is active this frame...
      if (text_5.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_5.tStop = t;  // not accounting for scr refresh
        text_5.frameNStop = frameN;  // exact frame index
        // update status
        text_5.status = PsychoJS.Status.FINISHED;
        text_5.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of FIXATION_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function FIXATION_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'FIXATION_2' ---
      for (const thisComponent of FIXATION_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('FIXATION_2.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (FIXATION_2MaxDurationReached) {
          FIXATION_2Clock.add(FIXATION_2MaxDuration);
      } else {
          FIXATION_2Clock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var BYE_BYEMaxDurationReached;
var BYE_BYEMaxDuration;
var BYE_BYEComponents;
function BYE_BYERoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'BYE_BYE' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      BYE_BYEClock.reset(routineTimer.getTime());
      routineTimer.add(10.000000);
      BYE_BYEMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('BYE_BYE.started', globalClock.getTime());
      BYE_BYEMaxDuration = null
      // keep track of which components have finished
      BYE_BYEComponents = [];
      BYE_BYEComponents.push(text_6);
      
      for (const thisComponent of BYE_BYEComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function BYE_BYERoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'BYE_BYE' ---
      // get current time
      t = BYE_BYEClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_6* updates
      if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_6.tStart = t;  // (not accounting for frame time here)
        text_6.frameNStart = frameN;  // exact frame index
        
        text_6.setAutoDraw(true);
      }
      
      
      // if text_6 is active this frame...
      if (text_6.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_6.tStop = t;  // not accounting for scr refresh
        text_6.frameNStop = frameN;  // exact frame index
        // update status
        text_6.status = PsychoJS.Status.FINISHED;
        text_6.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of BYE_BYEComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function BYE_BYERoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'BYE_BYE' ---
      for (const thisComponent of BYE_BYEComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('BYE_BYE.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (BYE_BYEMaxDurationReached) {
          BYE_BYEClock.add(BYE_BYEMaxDuration);
      } else {
          BYE_BYEClock.add(10.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }

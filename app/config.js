/**
  * Purpose         : JS file for project level configuration
  * Created by      : Sagar Kulthe
  * Created on      : 04/09/2016
  * Last updated by : Sagar Kulthe
  * Last updated on : 13/09/2016
*/

//Add this so that code should be executed in "strict mode".
"use strict";

var config = function config() {
    //defining a var instead of this (works for variable & function) will create a private definition   
    var _self = this;

    //Port for application hosting
    _self.port = 3000;
}

/* ************************************************************************
SINGLETON CLASS DEFINITION
************************************************************************ */
config.instance = null;

/**
 * Singleton getInstance definition
 * @return singleton class
 */
config.getInstance = function () {
    if (this.instance === null) {
        this.instance = new config();

    }
    return this.instance;
}

module.exports = config.getInstance();

Ext.data.JsonP.Siesta_Test_Action_TouchDrag({"tagname":"class","name":"Siesta.Test.Action.TouchDrag","autodetected":{},"files":[{"filename":"TouchDrag.js","href":"TouchDrag.html#Siesta-Test-Action-TouchDrag"}],"extends":"Siesta.Test.Action","members":[{"name":"by","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-by","meta":{}},{"name":"desc","tagname":"cfg","owner":"Siesta.Test.Action","id":"cfg-desc","meta":{}},{"name":"dragOnly","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-dragOnly","meta":{}},{"name":"fromOffset","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-fromOffset","meta":{}},{"name":"source","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-source","meta":{}},{"name":"target","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-target","meta":{}},{"name":"to","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-to","meta":{}},{"name":"toOffset","tagname":"cfg","owner":"Siesta.Test.Action.TouchDrag","id":"cfg-toOffset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Siesta.Test.Action.TouchDrag","short_doc":"This action can be included in the t.chain call with the \"touchDrag\" shortcut:\n\nt.chain(\n    {\n        action      : ...","component":false,"superclasses":["Siesta.Test.Action"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='docClass'>Siesta.Test.Action</a><div class='subclass '><strong>Siesta.Test.Action.TouchDrag</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag' target='_blank'>TouchDrag.js</a></div></pre><div class='doc-contents'><p>This action can be included in the <code>t.chain</code> call with the \"touchDrag\" shortcut:</p>\n\n<pre><code>t.chain(\n    {\n        action      : 'touchDrag',\n        target      : someDOMElementOrArray,\n        to          : someDOMElementOrArray\n    },\n    {\n        action      : 'touchDrag',\n        target      : someDOMElementOrArray,\n        by          : [ 10, 10 ]\n    },\n    // or\n    {\n        touchDrag   : someDOMElementOrArray,\n        to          : someDOMElementOrArray\n    }\n)\n</code></pre>\n\n<p>This action will perform a <a href=\"#!/api/Siesta.Test.Browser-method-dragTo\" rel=\"Siesta.Test.Browser-method-dragTo\" class=\"docClass\">dragTo</a> or <a href=\"#!/api/Siesta.Test.Browser-method-dragBy\" rel=\"Siesta.Test.Browser-method-dragBy\" class=\"docClass\">dragBy</a> actions on the provided <a href=\"#!/api/Siesta.Test.Action.TouchDrag-cfg-target\" rel=\"Siesta.Test.Action.TouchDrag-cfg-target\" class=\"docClass\">target</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-by' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-by' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-by' class='name expandable'>by</a> : Array/Function<span class=\"signature\"></span></div><div class='description'><div class='short'>The delta for dragging operation. ...</div><div class='long'><p>The delta for dragging operation. Should be provided as the array with delta value for each coordinate: <code>[ dX, dY ]</code> or the function returning such.</p>\n\n<p>Exactly one of the <code>to</code> and <code>by</code> configuration options should be provided for this action.</p>\n</div></div></div><div id='cfg-desc' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='defined-in docClass'>Siesta.Test.Action</a><br/><a href='source/Action4.html#Siesta-Test-Action-cfg-desc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action-cfg-desc' class='name expandable'>desc</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>When provided, once step is completed, a passing assertion with this text will be added to a test. ...</div><div class='long'><p>When provided, once step is completed, a passing assertion with this text will be added to a test.\nThis configuration option can be useful to indicate the progress of \"wait\" steps</p>\n</div></div></div><div id='cfg-dragOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-dragOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-dragOnly' class='name expandable'>dragOnly</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to skip the mouseup and not finish the drop operation (one can start another drag operation, emulating the pause...</div><div class='long'><p>True to skip the mouseup and not finish the drop operation (one can start another drag operation, emulating the pause during drag-n-drop).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-fromOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-fromOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-fromOffset' class='name expandable'>fromOffset</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>An offset in X, Y coordinates from the source element. ...</div><div class='long'><p>An offset in X, Y coordinates from the source element. Can be also specified as <code>offset</code> config.</p>\n</div></div></div><div id='cfg-source' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-source' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-source' class='name expandable'>source</a> : <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a>/Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for target. ...</div><div class='long'><p>Alias for <a href=\"#!/api/Siesta.Test.Action.TouchDrag-cfg-target\" rel=\"Siesta.Test.Action.TouchDrag-cfg-target\" class=\"docClass\">target</a>. This may sound confusing, but \"target\" of \"drag\" action is its \"source\" in the same time.</p>\n</div></div></div><div id='cfg-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-target' class='name expandable'>target</a> : <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a>/Function<span class=\"signature\"></span></div><div class='description'><div class='short'>The initial point of dragging operation. ...</div><div class='long'><p>The initial point of dragging operation. Can be provided as <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a> or the function returning it.\nWill also be passed further to the next step.</p>\n</div></div></div><div id='cfg-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-to' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-to' class='name expandable'>to</a> : <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a>/Function<span class=\"signature\"></span></div><div class='description'><div class='short'>The target point of dragging operation. ...</div><div class='long'><p>The target point of dragging operation. Can be provided as the DOM element, the array with screen coordinates: <code>[ x, y ]</code>, or the function\nreturning one of those.</p>\n\n<p>Exactly one of the <code>to</code> and <code>by</code> configuration options should be provided for this action.</p>\n</div></div></div><div id='cfg-toOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.TouchDrag'>Siesta.Test.Action.TouchDrag</span><br/><a href='source/TouchDrag.html#Siesta-Test-Action-TouchDrag-cfg-toOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.TouchDrag-cfg-toOffset' class='name expandable'>toOffset</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An offset in X, Y coordinates from the targeted element</p>\n</div><div class='long'><p>An offset in X, Y coordinates from the targeted element</p>\n</div></div></div></div></div></div></div>","meta":{}});
if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens8_7_3"] = {"code": "origlist = [45,32,88]\n\nnewlist = origlist + [\"cat\"]\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"origlist": ["REF", 1]}, "ordered_globals": ["origlist"], "stack_to_render": [], "heap": {"1": ["LIST", 45, 32, 88]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "<module>", "globals": {"origlist": ["REF", 1], "newlist": ["REF", 2]}, "ordered_globals": ["origlist", "newlist"], "stack_to_render": [], "heap": {"1": ["LIST", 45, 32, 88], "2": ["LIST", 45, 32, 88, "cat"]}, "stdout": ""}]}
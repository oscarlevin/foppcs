if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens10_1_2"] = {"code": "nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h'], ['i']]\nnested1[1] = [1, 2, 3]\nnested1[1][0] = 100\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 6], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "6": ["LIST", 1, 2, 3], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 6], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "6": ["LIST", 100, 2, 3], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": ""}]}
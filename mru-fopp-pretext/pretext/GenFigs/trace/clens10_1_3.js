if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens10_1_3"] = {"code": "eng2sp = {'three': 'tres', 'one': 'uno', 'two': 'dos'}\n\nvalue = eng2sp['two']\nprint(value)\nprint(eng2sp['one'])\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1]}, "ordered_globals": ["eng2sp"], "stack_to_render": [], "heap": {"1": ["DICT", ["three", "tres"], ["one", "uno"], ["two", "dos"]]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1], "value": "dos"}, "ordered_globals": ["eng2sp", "value"], "stack_to_render": [], "heap": {"1": ["DICT", ["three", "tres"], ["one", "uno"], ["two", "dos"]]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1], "value": "dos"}, "ordered_globals": ["eng2sp", "value"], "stack_to_render": [], "heap": {"1": ["DICT", ["three", "tres"], ["one", "uno"], ["two", "dos"]]}, "stdout": "dos\n"}, {"line": 5, "event": "return", "func_name": "<module>", "globals": {"eng2sp": ["REF", 1], "value": "dos"}, "ordered_globals": ["eng2sp", "value"], "stack_to_render": [], "heap": {"1": ["DICT", ["three", "tres"], ["one", "uno"], ["two", "dos"]]}, "stdout": "dos\nuno\n"}]}
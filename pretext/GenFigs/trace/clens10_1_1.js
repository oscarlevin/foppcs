if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["foppcs_1_clens10_1_1"] = {"code": "nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']]\nprint(nested1[0])\nprint(len(nested1))\nnested1.append(['i'])\nfor L in nested1:\n    print(L)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "['a', 'b', 'c']\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "['a', 'b', 'c']\n3\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n"}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 2]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 2]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n"}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 3]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 3]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n['d', 'e']\n"}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 4]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n['d', 'e']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 4]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n['d', 'e']\n['f', 'g', 'h']\n"}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 5]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n['d', 'e']\n['f', 'g', 'h']\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 5]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n['d', 'e']\n['f', 'g', 'h']\n['i']\n"}, {"line": 5, "event": "return", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "L": ["REF", 5]}, "ordered_globals": ["nested1", "L"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4], ["REF", 5]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"], "5": ["LIST", "i"]}, "stdout": "['a', 'b', 'c']\n3\n['a', 'b', 'c']\n['d', 'e']\n['f', 'g', 'h']\n['i']\n"}]}
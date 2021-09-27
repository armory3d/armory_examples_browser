import sys, os
import bpy
import arm, arm.utils
import arm.make_state as state

# exporter = sys.argv[0]
# print(exporter)
target = 'html5'
#target = sys.argv.pop()
#mode = sys.argv.pop()

wrd = bpy.data.worlds['Arm']
# if(len(wrd.arm_exporterlist)==0):

# wrd.arm_verbose_output=True

wrd.arm_exporterlist.add()
wrd.arm_exporterlist[wrd.arm_exporterlist_index].name = 'Temp'
wrd.arm_exporterlist[wrd.arm_exporterlist_index].arm_project_target = target
wrd.arm_exporterlist[wrd.arm_exporterlist_index].arm_project_scene = bpy.context.scene
wrd.arm_exporterlist_index = len(wrd.arm_exporterlist) - 1

# bpy.ops.arm.clean_project()
# bpy.ops.arm.build_project()
bpy.ops.arm.publish_project()
# bpy.ops.wm.quit_blender()
code = state.proc_build.poll()
sys.exit(code)

import sys, os
import bpy, arm
import arm.utils

#target = sys.argv.pop()
#mode = sys.argv.pop()

wrd = bpy.data.worlds['Arm']
# if(len(wrd.arm_exporterlist)==0):
wrd.arm_exporterlist.add()
wrd.arm_exporterlist_index = len(wrd.arm_exporterlist) - 1
wrd.arm_exporterlist[wrd.arm_exporterlist_index].name = 'Temp'
wrd.arm_exporterlist[wrd.arm_exporterlist_index].arm_project_target = 'html5'
wrd.arm_exporterlist[wrd.arm_exporterlist_index].arm_project_scene = bpy.context.scene

# bpy.ops.arm.clean_project()
# bpy.ops.arm.build_project()
bpy.ops.arm.publish_project()

bpy.ops.wm.quit_blender()

import sys, os
import bpy, arm

wrd = bpy.data.worlds['Arm']
if(len(wrd.arm_exporterlist)==0):
    wrd.arm_exporterlist.add()
    wrd.arm_exporterlist_index = len(wrd.arm_exporterlist) - 1
    wrd.arm_exporterlist[-1].name = 'Preset'
    wrd.arm_exporterlist[-1].arm_project_target = 'html5'
    wrd.arm_exporterlist[-1].arm_project_scene = bpy.context.scene
bpy.ops.arm.clean_project()
bpy.ops.arm.publish_project()

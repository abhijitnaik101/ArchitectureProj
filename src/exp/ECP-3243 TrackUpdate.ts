import { Polygon2D, RMData } from '@app/@shared/_models/common/Configurator';
import { FgPolygonSubContext, DesignTypeEnum } from '../../geometry-layer/interfaces/Enums';
import { DesignDataHelpers } from '../DesignDataHelper/DesignDataHelpers';
import { PolygonVariablesHelper, TRACKN } from './PolygonVariablesHelper';
import { DesignHelper } from '../../3d-config/data-helpers/models/DesignHelper';
import { SASHORDER } from './GlassSashHelper';

export class TrackNUpdateHelper {
  static updateTrackNPolygonVariables(framePolygon: Polygon2D, meshParentSash: Polygon2D) {
    let finalCombination = DesignDataHelpers.getTrackGlassMeshCombination(framePolygon, framePolygon.partGroupType);
    const designType = meshParentSash.getLastSashHolderAncestor()?.fgDesignType;
    switch (finalCombination) {
      //#region [ SLIDING ]

      //#region [Base : 2Track 2Glass]
      case '2.5-2-1':
      case '3.5-2-1':
      case '4.5-2-1':
      case '3-2-1':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash
        ) {
          // 3
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '3');
          });

          // 2
          [FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.LiftAndSlideRightHandleSash, FgPolygonSubContext.SlidingRightSashOuterCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '2');
            },
          );

          // 1
          [
            FgPolygonSubContext.SlidingLeftHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '1');
          });
        } else if (meshParentSash.fgPolygonSubContext === FgPolygonSubContext.VerticalSlidingBottomSash) {
          // 3
          [FgPolygonSubContext.VerticalSlidingTopSash].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '2');
          });

          // 2
          [FgPolygonSubContext.VerticalSlidingBottomSash].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '3');
          });

          // 1
          [FgPolygonSubContext.VerticalSlidingBottomSashMesh].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '1');
          });
        } else if (meshParentSash.fgPolygonSubContext === FgPolygonSubContext.VerticalSlidingTopSash) {
          // 3
          [FgPolygonSubContext.VerticalSlidingTopSash].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '3');
          });

          // 2
          [FgPolygonSubContext.VerticalSlidingBottomSash].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '2');
          });

          // 1
          [FgPolygonSubContext.VerticalSlidingTopSashMesh].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '1');
          });
        } else {
          // 2
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.LiftAndSlideLeftHandleSash, FgPolygonSubContext.SlidingLeftSashInnerCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '2');
            },
          );

          // 3
          [
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            FgPolygonSubContext.SlidingLeftSashOuterCorner,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '3');
          });

          // 1
          [
            FgPolygonSubContext.SlidingRightHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
            FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
            FgPolygonSubContext.SlidingLeftSashOuterCornerMesh,
            FgPolygonSubContext.SlidingLeftSashInnerCornerMesh
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '1');
          });
        }
        break;

      //#endregion

      //#region [Base : 1X-2X-1X]
      case '2.5-3-1':
      case '2.5-3-2':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftSashInnerCorner
        ) {
          // 3
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            FgPolygonSubContext.SlidingLeftSashInnerCorner
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
          });

          // 2
          [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [
            FgPolygonSubContext.SlidingLeftHandleSashMesh,
            FgPolygonSubContext.SlidingRightHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
            FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
            FgPolygonSubContext.SlidingLeftSashInnerCornerMesh
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          });
        }
        break;
      //#endregion

      //#region [Combination : 1X-2X-1X & 3Track 3Glass]
      case '3-3-1':
        //#region [Base : 3Track 3Glass]
        if (designType === DesignTypeEnum.ThreeTrackThreeShutter) {
          if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash || 
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftSashInnerCorner
          ) {
            // 3
            [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.LiftAndSlideLeftHandleSash, FgPolygonSubContext.SlidingRightSashOuterCorner, FgPolygonSubContext.SlidingLeftSashInnerCorner].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
              },
            );

            // 2
            [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
              },
            );

            // 1
            [
              FgPolygonSubContext.SlidingLeftHandleSashMesh,
              FgPolygonSubContext.SlidingRightHandleSash,
              FgPolygonSubContext.LiftAndSlideRightHandleSash,
              FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
              FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
              FgPolygonSubContext.SlidingLeftSashInnerCornerMesh
            ].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            });
          } else if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash
          ) {
            [
              FgPolygonSubContext.SlidingRightHandleSashMesh,
              FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
            ].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            });
          }
          break;
        }
      //#endregion
      case '3-3-2':
        //#region [Base : 1X-2X-1X & 3Track 3Glass]
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash
        ) {
          // 3
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
          });

          // 2
          [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [
            FgPolygonSubContext.SlidingLeftHandleSashMesh,
            FgPolygonSubContext.SlidingRightHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          });
        }
        //#endregion

        break;
      //#endregion

      //#region [Base : 3Track 3Glass]
      case '3.5-3-1':
      case '4-3-1':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner
        ) {
          // 4
          [FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.LiftAndSlideRightHandleSash, FgPolygonSubContext.SlidingRightSashOuterCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            },
          );

          // 3
          [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );

          // 2
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.LiftAndSlideLeftHandleSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh, FgPolygonSubContext.SlidingRightSashOuterCornerMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftSashInnerCorner
        ) {
          // 4
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.LiftAndSlideLeftHandleSash, FgPolygonSubContext.SlidingLeftSashInnerCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            },
          );

          // 3
          [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );

          // 2
          [FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.LiftAndSlideRightHandleSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [FgPolygonSubContext.SlidingRightHandleSashMesh, FgPolygonSubContext.LiftAndSlideRightHandleSashMesh, FgPolygonSubContext.SlidingLeftSashInnerCornerMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        }

        break;
      //#endregion

      //#region [Base : 2Track 4Glass]
      case '2.5-4-1':
      case '2.5-4-2':
      case '3-4-1':
      case '3-4-2':
        if (
          designType === DesignTypeEnum.ZigZag2T4PSideOpening ||
          designType === DesignTypeEnum.ZigZag2T4PCenterOpening
        ) {
          // 3
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.ZigZagRightMeetingSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );

          // 2
          [FgPolygonSubContext.ZigZagLeftMeetingSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftSashInnerCorner ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashInnerCorner ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner
        ) {
          // 3
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
            FgPolygonSubContext.SlidingLeftSashInnerCorner,
            FgPolygonSubContext.SlidingRightSashInnerCorner,
            FgPolygonSubContext.SlidingRightSashOuterCorner
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
          });

          // 2
          [
            FgPolygonSubContext.SlidingLeftMeetingSash,
            FgPolygonSubContext.SlidingRightMeetingSash,
            FgPolygonSubContext.LiftAndSlideLeftMeetingSash,
            FgPolygonSubContext.LiftAndSlideRightMeetingSash,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
          });

          // 1
          [
            FgPolygonSubContext.SlidingLeftHandleSashMesh,
            FgPolygonSubContext.SlidingRightHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
            FgPolygonSubContext.SlidingLeftSashInnerCornerMesh,
            FgPolygonSubContext.SlidingRightSashInnerCornerMesh,
            FgPolygonSubContext.SlidingRightSashOuterCornerMesh
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          });
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightMeetingSash
        ) {
          // 2
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            FgPolygonSubContext.SlidingLeftSashInnerCorner
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
          });

          // 3
          [
            FgPolygonSubContext.SlidingLeftMeetingSash,
            FgPolygonSubContext.SlidingRightMeetingSash,
            FgPolygonSubContext.LiftAndSlideLeftMeetingSash,
            FgPolygonSubContext.LiftAndSlideRightMeetingSash,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
          });

          // 1
          [
            FgPolygonSubContext.SlidingLeftMeetingSashMesh,
            FgPolygonSubContext.SlidingRightMeetingSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftMeetingSashMesh,
            FgPolygonSubContext.LiftAndSlideRightMeetingSashMesh,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          });
        }
        break;
      //#endregion

      //#region [Base : 3Track 5Glass]
      case '3.5-5-1':
      case '3.5-5-2':
      case '4-5-1':
      case '4-5-2':
      case `4.5-5-1`:
      case `4.5-5-2`:
        if (designType === DesignTypeEnum.ThreeTrackFiveShutterMeetingBothLeft) {
          if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash
          ) {
            // 4
            [FgPolygonSubContext.SlidingLeftHandleSash].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            });

            // 3
            [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
              },
            );

            //1
            [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
              },
            );

            // 2
            [FgPolygonSubContext.SlidingRightMeetingSash, FgPolygonSubContext.SlidingLeftMeetingSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
              },
            );
          } else if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash
          ) {
            // 2
            [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
              },
            );

            // 1
            [FgPolygonSubContext.SlidingLeftMeetingSashMesh, FgPolygonSubContext.SlidingRightMeetingSashMesh].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
              },
            );

            // 3
            [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
              },
            );

            // 4
            [FgPolygonSubContext.SlidingLeftHandleSash].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            });
          }
        } else if (designType === DesignTypeEnum.ThreeTrackFiveShutterMeetingBothRight) {
          if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash
          ) {
            // 3
            [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingBothSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
              },
            );

            //1
            [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
              },
            );

            // 4
            [FgPolygonSubContext.SlidingRightHandleSash].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            });

            // 2
            [FgPolygonSubContext.SlidingRightMeetingSash, FgPolygonSubContext.SlidingLeftMeetingSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
              },
            );
          } else if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash
          ) {
            // 2
            [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
              },
            );

            // 1
            [FgPolygonSubContext.SlidingLeftMeetingSashMesh, FgPolygonSubContext.SlidingRightMeetingSashMesh].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
              },
            );

            // 3
            [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.SlidingLeftHandleSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
              },
            );

            // 4
            [FgPolygonSubContext.SlidingRightHandleSash].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            });
          }
        }
        break;
      //#endregion

      //#region [Base : 3Track 5Glass 'X-X-2X-X-X']
      case '3.5-5-1':
      case '3.5-5-2':
      case '4-5-1':
      case '4-5-2':
      case `4.5-5-1`:
      case `4.5-5-2`:
        if (designType === DesignTypeEnum.Sliding3TrackOneXOneXTwoXOneXOneX) {
          if (
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
            meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash
          ) {
            // 2
            [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
              (fgPolygonSubContext) => {
                PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
              },
            );

            // SlidingBothSash: trackn depends on sashOrder
            const bothSashPolygons = framePolygon.getAllSashChildren(false, FgPolygonSubContext.SlidingBothSash);
            bothSashPolygons.forEach((sashPolygon) => {
              const sashOrderVar = sashPolygon.polygonVariables?.find((v) => v.varName === SASHORDER);
              if (sashOrderVar) {
                if (sashOrderVar.varValue === '3') {
                  PolygonVariablesHelper.updatePolygonVariableValue(sashPolygon, 'TRACKN', '4');
                } else if (sashOrderVar.varValue === '2' || sashOrderVar.varValue === '4') {
                  PolygonVariablesHelper.updatePolygonVariableValue(sashPolygon, 'TRACKN', '3');
                }
              }
            });

            // 1
            [FgPolygonSubContext.SlidingLeftHandleSashMesh].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            });
            // 1
            [FgPolygonSubContext.SlidingRightHandleSashMesh].forEach((fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            });
          }
        }
        break;
      //#endregion

      //#region [Base : 3Track 6Glass]
      case '4-6-1':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightHandleSash
        ) {
          // 2
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            FgPolygonSubContext.SlidingLeftSashInnerCorner,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
          });

          // 1
          [
            FgPolygonSubContext.SlidingLeftHandleSashMesh,
            FgPolygonSubContext.SlidingRightHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
            FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
            FgPolygonSubContext.SlidingLeftSashInnerCornerMesh
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          });

          // 3
          [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );

          // 4
          [
            FgPolygonSubContext.SlidingRightMeetingSash,
            FgPolygonSubContext.SlidingLeftMeetingSash,
            FgPolygonSubContext.LiftAndSlideRightMeetingSash,
            FgPolygonSubContext.LiftAndSlideLeftMeetingSash,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
          });
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.LiftAndSlideRightMeetingSash
        ) {
          // 2
          [
            FgPolygonSubContext.SlidingLeftMeetingSash,
            FgPolygonSubContext.SlidingRightMeetingSash,
            FgPolygonSubContext.LiftAndSlideLeftMeetingSash,
            FgPolygonSubContext.LiftAndSlideRightMeetingSash,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
          });

          // 1
          [
            FgPolygonSubContext.SlidingLeftMeetingSashMesh,
            FgPolygonSubContext.SlidingRightMeetingSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftMeetingSashMesh,
            FgPolygonSubContext.LiftAndSlideRightMeetingSashMesh,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          });

          // 3
          [FgPolygonSubContext.SlidingBothSash, FgPolygonSubContext.LiftAndSlideBothSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );

          // 4
          [
            FgPolygonSubContext.SlidingLeftHandleSash,
            FgPolygonSubContext.SlidingRightHandleSash,
            FgPolygonSubContext.LiftAndSlideLeftHandleSash,
            FgPolygonSubContext.LiftAndSlideRightHandleSash,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            FgPolygonSubContext.SlidingLeftSashInnerCorner
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
          });
        }
        break;

      case '4-6-2':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash
        ) {
          // 2
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );

          // 3
          [FgPolygonSubContext.SlidingBothSash].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
          });

          // 4
          [FgPolygonSubContext.SlidingRightMeetingSash, FgPolygonSubContext.SlidingLeftMeetingSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            },
          );
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash
        ) {
          // 4
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
            },
          );

          // 3
          [FgPolygonSubContext.SlidingBothSash].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
          });

          // 2
          [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
            },
          );

          // 1
          [FgPolygonSubContext.SlidingLeftMeetingSashMesh, FgPolygonSubContext.SlidingRightMeetingSashMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        }
        break;

      case '3.5-6-1':
      case '3.5-6-2':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash
        ) {
          // 1
          [FgPolygonSubContext.SlidingLeftMeetingSashMesh, FgPolygonSubContext.SlidingRightMeetingSashMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash
        ) {
          // 1
          [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        }

        // 2
        [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
          },
        );

        // 3
        [FgPolygonSubContext.SlidingBothSash].forEach((fgPolygonSubContext) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
        });

        // 4
        [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '4');
          },
        );
        break;

      case '3-6-1':
      case '3-6-2':
        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftMeetingSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightMeetingSash
        ) {

          //if left panel (right mullion)
          // MeshSashTrack
          // MeetingSashTrack
          // HandleSashTrack

          [
            FgPolygonSubContext.SlidingLeftMeetingSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
            FgPolygonSubContext.SlidingRightMeetingSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '1');
          });
          [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
        } else if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftSashInnerCorner
        ) {
          [
            FgPolygonSubContext.SlidingLeftHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideLeftHandleSashMesh,
            FgPolygonSubContext.SlidingRightHandleSashMesh,
            FgPolygonSubContext.LiftAndSlideRightHandleSashMesh,
            FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
            FgPolygonSubContext.SlidingLeftSashInnerCornerMesh
          ].forEach((fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, TRACKN, '1');
          });
          [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
            },
          );
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.SlidingRightSashOuterCorner, FgPolygonSubContext.SlidingLeftSashInnerCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '3');
            },
          );
        }
        break;

      //#endregion

      //#region [Base: 4Track 8Glass]
      case '5-8-1':
      case '5-8-2':
      case '4.5-8-1':
      case '4.5-8-2':
        const sldLeftHandleSashMesh = framePolygon.getAllSashChildren(
          true,
          FgPolygonSubContext.SlidingLeftHandleSashMesh,
        );
        const sldRightHandleSashMesh = framePolygon.getAllSashChildren(
          true,
          FgPolygonSubContext.SlidingRightHandleSashMesh,
        );

        const sldBothSashPolygons = framePolygon.getAllSashChildren(false, FgPolygonSubContext.SlidingBothSash);
        const sldBothSashPolygonsSorted = [...sldBothSashPolygons].sort((a, b) =>
          a.boundingBox.min.x < b.boundingBox.min.x ? -1 : 1,
        );
        const [sldSash2, sldSash3, sldSash6, sldSash7] = sldBothSashPolygonsSorted;

        if (sldLeftHandleSashMesh.length > 0 || sldRightHandleSashMesh.length > 0) {
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.SlidingRightSashOuterCorner, FgPolygonSubContext.SlidingLeftSashInnerCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');

              PolygonVariablesHelper.updatePolygonVariableValue(sldSash2, 'TRACKN', '3');
              PolygonVariablesHelper.updatePolygonVariableValue(sldSash3, 'TRACKN', '4');
              PolygonVariablesHelper.updatePolygonVariableValue(sldSash6, 'TRACKN', '4');
              PolygonVariablesHelper.updatePolygonVariableValue(sldSash7, 'TRACKN', '3');

              [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
                (fgPolygonSubContext) => {
                  PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '5');
                },
              );
            },
          );
        } else {
          [FgPolygonSubContext.SlidingLeftHandleSash, FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.SlidingRightSashOuterCorner, FgPolygonSubContext.SlidingLeftSashInnerCorner].forEach(
            (fgPolygonSubContext) => {
              PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '5');

              PolygonVariablesHelper.updatePolygonVariableValue(sldSash2, 'TRACKN', '4');
              PolygonVariablesHelper.updatePolygonVariableValue(sldSash3, 'TRACKN', '3');
              PolygonVariablesHelper.updatePolygonVariableValue(sldSash6, 'TRACKN', '3');
              PolygonVariablesHelper.updatePolygonVariableValue(sldSash7, 'TRACKN', '4');

              [FgPolygonSubContext.SlidingLeftMeetingSash, FgPolygonSubContext.SlidingRightMeetingSash].forEach(
                (fgPolygonSubContext) => {
                  PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
                },
              );
            },
          );
        }

        [
          FgPolygonSubContext.SlidingLeftMeetingSashMesh,
          FgPolygonSubContext.SlidingRightMeetingSashMesh,
          FgPolygonSubContext.SlidingLeftHandleSashMesh,
          FgPolygonSubContext.SlidingRightHandleSashMesh,
          FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
          FgPolygonSubContext.SlidingLeftSashInnerCornerMesh,
        ].forEach((fgPolygonSubContext) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
        });
        break;
      //#endregion

      //#region [Base: 5Track 5Glass]
      case '5-4-1':
        const sldBthSashPolygons541 = framePolygon.getAllSashChildren(false, FgPolygonSubContext.SlidingBothSash);
        const sldBthSashPolygonsSorted541 = [...sldBthSashPolygons541].sort((a, b) =>
          a.boundingBox.min.x < b.boundingBox.min.x ? -1 : 1,
        );
        const [sldSash1_541, sldSash2_541] = sldBthSashPolygonsSorted541;

        if (meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash) {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_541, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_541, 'TRACKN', '3');
        } else {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_541, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_541, 'TRACKN', '4');
        }
        [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          },
        );
        break;
      case '5-8-2':
      case '5-8-1':
        const sldBthSashPolygons582 = framePolygon.getAllSashChildren(false, FgPolygonSubContext.SlidingBothSash);
        const sldBthSashPolygonsSorted582 = [...sldBthSashPolygons582].sort((a, b) =>
          a.boundingBox.min.x < b.boundingBox.min.x ? -1 : 1,
        );
        const [sldSash1_582, sldSash2_582, sldSash3_582, sldSash4_582] = sldBthSashPolygonsSorted582;

        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash || 
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightSashOuterCorner ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftSashInnerCorner
        ) {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftSashInnerCorner,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftMeetingSash,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightMeetingSash,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_582, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_582, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash3_582, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash4_582, 'TRACKN', '3');
        } else {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '5',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftMeetingSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightMeetingSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightSashOuterCorner,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftSashInnerCorner,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_582, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_582, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash3_582, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash4_582, 'TRACKN', '4');
        }
        [
          FgPolygonSubContext.SlidingLeftHandleSashMesh,
          FgPolygonSubContext.SlidingRightHandleSashMesh,
          FgPolygonSubContext.SlidingLeftMeetingSashMesh,
          FgPolygonSubContext.SlidingRightMeetingSashMesh,
          FgPolygonSubContext.SlidingRightSashOuterCornerMesh,
          FgPolygonSubContext.SlidingLeftSashInnerCornerMesh,
        ].forEach((fgPolygonSubContext) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
        });
        break;

      case '6-5-1':
        const sldBthSashPolygons651 = framePolygon.getAllSashChildren(false, FgPolygonSubContext.SlidingBothSash);
        const sldBthSashPolygonsSorted651 = [...sldBthSashPolygons651].sort((a, b) =>
          a.boundingBox.min.x < b.boundingBox.min.x ? -1 : 1,
        );
        const [sldSash1_651, sldSash2_651, sldSash3_651] = sldBthSashPolygonsSorted651;

        if (meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash) {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '6',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_651, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_651, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash3_651, 'TRACKN', '5');
        } else {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '6',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_651, 'TRACKN', '5');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_651, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash3_651, 'TRACKN', '3');
        }
        [FgPolygonSubContext.SlidingLeftHandleSashMesh, FgPolygonSubContext.SlidingRightHandleSashMesh].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          },
        );
        break;

      case '6-10-1':
      case '6-10-2':
        const sldBthSashPolygons6102 = framePolygon.getAllSashChildren(false, FgPolygonSubContext.SlidingBothSash);
        const sldBthSashPolygonsSorted6102 = [...sldBthSashPolygons6102].sort((a, b) =>
          a.boundingBox.min.x < b.boundingBox.min.x ? -1 : 1,
        );
        const [sldSash1_6102, sldSash2_6102, sldSash3_6102, sldSash4_6102, sldSash5_6102, sldSash6_6102] =
          sldBthSashPolygonsSorted6102;

        if (
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingLeftHandleSash ||
          meshParentSash.fgPolygonSubContext === FgPolygonSubContext.SlidingRightHandleSash
        ) {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftMeetingSash,
            'TRACKN',
            '6',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightMeetingSash,
            'TRACKN',
            '6',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_6102, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_6102, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash3_6102, 'TRACKN', '5');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash4_6102, 'TRACKN', '5');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash5_6102, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash6_6102, 'TRACKN', '3');
        } else {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftHandleSash,
            'TRACKN',
            '6',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightHandleSash,
            'TRACKN',
            '6',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingLeftMeetingSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            FgPolygonSubContext.SlidingRightMeetingSash,
            'TRACKN',
            '2',
          );
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash1_6102, 'TRACKN', '5');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash2_6102, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash3_6102, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash4_6102, 'TRACKN', '3');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash5_6102, 'TRACKN', '4');
          PolygonVariablesHelper.updatePolygonVariableValue(sldSash6_6102, 'TRACKN', '5');
        }
        [
          FgPolygonSubContext.SlidingLeftHandleSashMesh,
          FgPolygonSubContext.SlidingRightHandleSashMesh,
          FgPolygonSubContext.SlidingLeftMeetingSashMesh,
          FgPolygonSubContext.SlidingRightMeetingSashMesh,
        ].forEach((fgPolygonSubContext) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
        });
        break;

      //#region [ MONORAIL ]
      case '1.5-2-1':
        // 2
        [
          FgPolygonSubContext.MonoLeftFxd,
          FgPolygonSubContext.SlidingRightHandleSash,
          FgPolygonSubContext.SlidingLeftHandleSash,
        ].forEach((fgPolygonSubContext) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
        });

        // 1
        [FgPolygonSubContext.SlidingRightHandleSashMesh, FgPolygonSubContext.SlidingLeftHandleSashMesh].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          },
        );
        break;

      case '2-2-1':
        // 2
        [FgPolygonSubContext.SlidingRightHandleSash, FgPolygonSubContext.SlidingLeftHandleSash].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '2');
          },
        );

        // 1
        [FgPolygonSubContext.SlidingRightHandleSashMesh, FgPolygonSubContext.SlidingLeftHandleSashMesh].forEach(
          (fgPolygonSubContext) => {
            PolygonVariablesHelper.updateVariableByFgSubContext(framePolygon, fgPolygonSubContext, 'TRACKN', '1');
          },
        );
        break;
      //#endregion

      default:
      //#endregion
    }
  }

  static updateTrackNoForMonoRailDesign(openingPolygons: Polygon2D[]) {
    openingPolygons.forEach((openingPolygon) => {
      const allFrames = openingPolygon.getAllFrameChildren();
      allFrames.forEach((framePolygon) => {
        if (DesignDataHelpers.isMonorailFrame(framePolygon)) {
          this.updateTrackNPolygonVariablesForMonoRail(framePolygon);
        }
      });
    });
  }

  static updateTrackNPolygonVariablesForMonoRail(framePolygon: Polygon2D) {
    const isMesh = DesignHelper.isMeshShutterPresentinFramePolygon(framePolygon);
    const primaryData = RMData.getPrimaryRMDataInLine2D(framePolygon.edges[0]);
    const primaryDataPartType = primaryData?.partTypeName;
    const allChildSash = framePolygon.getAllSashChildren();
    const allFxdSash = allChildSash.filter((x) => DesignDataHelpers.isMonoRailFixedPolygon(x.fgPolygonSubContext));
    const allSldSash = allChildSash.filter((x) => !DesignDataHelpers.isMonoRailFixedPolygon(x.fgPolygonSubContext));
    const isSldHandleSash = allChildSash.filter((x) =>
      DesignDataHelpers.isSLidingHandleShutters(x.fgPolygonSubContext),
    );
    const isMonorail_2Track = primaryDataPartType?.toUpperCase().includes('SLD MONORAIL 2 TRACK');

    if (!isMonorail_2Track) {
      // If outside , reverse the track.
      if (primaryDataPartType?.toUpperCase().includes('OUTSIDE')) {
        allFxdSash.forEach((eachFixed) => PolygonVariablesHelper.updatePolygonVariableValue(eachFixed, 'TRACKN', '1'));
        allSldSash.forEach((eachSld) => PolygonVariablesHelper.updatePolygonVariableValue(eachSld, 'TRACKN', '2'));
      }
      // For mesh shutter
      if (isMesh) {
        allFxdSash.forEach((eachFixed) => {
          if (primaryDataPartType?.toUpperCase().includes('OUTSIDE')) {
            PolygonVariablesHelper.updatePolygonVariableValue(eachFixed, 'TRACKN', '2');
          } else {
            PolygonVariablesHelper.updatePolygonVariableValue(eachFixed, 'TRACKN', '3');
          }
        });
        allSldSash.forEach((eachSld) => {
          if (primaryDataPartType?.toUpperCase().includes('OUTSIDE')) {
            PolygonVariablesHelper.updatePolygonVariableValue(eachSld, 'TRACKN', '3');
          } else {
            PolygonVariablesHelper.updatePolygonVariableValue(eachSld, 'TRACKN', '2');
          }
        });

        [
          FgPolygonSubContext.SlidingRightHandleSashMesh,
          FgPolygonSubContext.SlidingLeftHandleSashMesh,
          FgPolygonSubContext.SlidingRightMeetingSashMesh,
          FgPolygonSubContext.SlidingLeftMeetingSashMesh,
        ].forEach((fgPolygonSubContextSldSashMesh) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            fgPolygonSubContextSldSashMesh,
            'TRACKN',
            '1',
          );
        });
      }
    } else {
      // If outside , reverse the track.
      if (primaryDataPartType?.toUpperCase().includes('OUTSIDE')) {
        allFxdSash.forEach((eachFixed) => PolygonVariablesHelper.updatePolygonVariableValue(eachFixed, 'TRACKN', '1'));
        isSldHandleSash.forEach((eachSld) => PolygonVariablesHelper.updatePolygonVariableValue(eachSld, 'TRACKN', '3'));
      }
      // For mesh shutter
      if (isMesh) {
        allFxdSash.forEach((eachFixed) => {
          if (primaryDataPartType?.toUpperCase().includes('OUTSIDE')) {
            PolygonVariablesHelper.updatePolygonVariableValue(eachFixed, 'TRACKN', '2');
          } else {
            PolygonVariablesHelper.updatePolygonVariableValue(eachFixed, 'TRACKN', '4');
          }
        });
        allSldSash.forEach((eachSld) => {
          if (primaryDataPartType?.toUpperCase().includes('OUTSIDE')) {
            PolygonVariablesHelper.updatePolygonVariableValue(eachSld, 'TRACKN', '4');
          } else {
            PolygonVariablesHelper.updatePolygonVariableValue(eachSld, 'TRACKN', '2');
          }
        });

        [
          FgPolygonSubContext.SlidingRightHandleSashMesh,
          FgPolygonSubContext.SlidingLeftHandleSashMesh,
          FgPolygonSubContext.SlidingRightMeetingSashMesh,
          FgPolygonSubContext.SlidingLeftMeetingSashMesh,
        ].forEach((fgPolygonSubContextSldSashMesh) => {
          PolygonVariablesHelper.updateVariableByFgSubContext(
            framePolygon,
            fgPolygonSubContextSldSashMesh,
            'TRACKN',
            '1',
          );
        });
      }
    }
  }
}
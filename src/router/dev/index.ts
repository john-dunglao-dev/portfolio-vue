import type { RouteRecordRaw } from "vue-router";
import productionRoutes from "@/router/prod";

export default (<RouteRecordRaw[]>[...productionRoutes]);
